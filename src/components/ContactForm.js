"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

const machineOptions = ["ABI Sheet Pile Machine","Rotary Drilling Rig / SANY","Bauer Foundation Equipment","Liebherr Drilling Rig","Vibro Hammer / Antares","Casagrande / Foundation Plant","Hydraulic / Control System","Other"];
const serviceOptions = [{value:"plc",label:"PLC Programming"},{value:"hmi",label:"HMI Development"},{value:"canbus",label:"CANbus Troubleshooting"},{value:"sensors",label:"Sensor Calibration"},{value:"electrical",label:"Electrical Fault Finding"},{value:"lmi",label:"LMI Calibration"},{value:"joystick",label:"Joystick CANbus Integration"},{value:"panels",label:"Control Panels & Harnesses"},{value:"other",label:"Other / Not sure"}];

export default function ContactForm({ showService = false }) {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({name:"",company:"",email:"",phone:"",whatsapp:"",machine:"",service:"",message:""});
  const [state, setState] = useState({status:"idle",message:""});

  useEffect(() => {
    const service = searchParams.get("service") || "";
    const machine = searchParams.get("machine") || "";
    setForm((prev) => ({...prev,...(service ? {service} : {}),...(machine ? {machine} : {})}));
  }, [searchParams]);

  const onChange = (e) => setForm((prev) => ({...prev,[e.target.name]:e.target.value}));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState({status:"loading",message:""});
    try {
      const response = await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)});
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to submit your request.");
      setState({status:"success",message:"Thank you. Your request has been received. We will contact you shortly."});
      setForm({name:"",company:"",email:"",phone:"",whatsapp:"",machine:"",service:"",message:""});
    } catch (error) {
      setState({status:"error",message:error instanceof Error ? error.message : "Something went wrong. Please try again or contact us on WhatsApp."});
    }
  };

  return (
    <form data-lead-form="api-v2" className="contact__form reveal reveal-d2" onSubmit={onSubmit}>
      <div className="form-row">
        <label><span>Full name</span><input type="text" name="name" placeholder="Your name" required value={form.name} onChange={onChange}/></label>
        <label><span>Company</span><input type="text" name="company" placeholder="Company name" value={form.company} onChange={onChange}/></label>
      </div>
      <div className="form-row">
        <label><span>Email</span><input type="email" name="email" placeholder="you@company.com" required value={form.email} onChange={onChange}/></label>
        <label><span>WhatsApp / Phone</span><input type="tel" name="phone" placeholder="+971 ..." value={form.phone} onChange={onChange}/></label>
      </div>
      <label><span>Machine type</span><select name="machine" value={form.machine} onChange={onChange}><option value="">Select machinery</option>{machineOptions.map((opt)=><option key={opt} value={opt}>{opt}</option>)}</select></label>
      {showService && <label><span>Service needed</span><select name="service" value={form.service} onChange={onChange}><option value="">Select service</option>{serviceOptions.map((opt)=><option key={opt.value} value={opt.value}>{opt.label}</option>)}</select></label>}
      <label><span>How can we help?</span><textarea name="message" rows={5} placeholder="Describe the fault, codes or service needed..." required value={form.message} onChange={onChange}/></label>
      <button className="btn btn--accent btn--block" type="submit" disabled={state.status === "loading"}>{state.status === "loading" ? "Sending..." : "Send Request"}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 5l7 7-7 7"/></svg></button>
      {state.message ? <p className={state.status === "success" ? "form-note form-note--success" : "form-note form-note--error"} role="status">{state.message}</p> : <p className="form-note">Your request is securely submitted to Zaki Abbas. For urgent support use WhatsApp {site.phoneDisplay}.</p>}
    </form>
  );
}
