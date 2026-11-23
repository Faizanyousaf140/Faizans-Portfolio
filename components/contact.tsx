'use client';

import { useRef, useState, type FormEvent } from 'react';
import { ArrowRight, ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Send } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const sending = useRef(false);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const configured = Boolean(serviceId && templateId && publicKey);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current || !serviceId || !templateId || !publicKey) return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (fields.get('website')) return;
    const fromName = String(fields.get('from_name') ?? '').trim();
    const fromEmail = String(fields.get('from_email') ?? '').trim();
    const subject = String(fields.get('subject') ?? '').trim();
    const message = String(fields.get('message') ?? '').trim();
    if (!fromName || !fromEmail || !subject || !message) {
      setStatus('error');
      return;
    }
    sending.current = true;
    setStatus('sending');
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(serviceId, templateId, {
        from_name: fromName,
        from_email: fromEmail,
        reply_to: fromEmail,
        subject,
        message,
        to_name: profile.fullName,
      }, { publicKey, limitRate: { id: 'portfolio-contact', throttle: 10000 } });
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
    }
  }
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${profile.email}`; }
  }
  return <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
    <div className="container contact-shell">
      <div className="contact-intro"><span className="section-kicker"><span className="section-count">05</span> WHAT&apos;S NEXT?</span><span className="contact-star" aria-hidden="true">✳</span></div>
      <h2 id="contact-title">Have an idea?<br/><span>Let&apos;s build something</span> great<span className="contact-period">.</span></h2>
      <p>I&apos;m interested in engineering roles where I can build LLM applications and evaluate how agents behave. Email me with the role, the team and the problem you&apos;re working on.</p>
      <div className="contact-buttons"><a className="button button-dark" href={`mailto:${profile.email}?subject=Hello%20Faizan%20%E2%80%94%20let%27s%20connect`}>Start a conversation <ArrowUpRight size={19}/></a><button className="button button-contact-outline" type="button" onClick={copyEmail} aria-live="polite">{copied ? <Check size={17}/> : <Copy size={17}/>} {copied ? 'Email copied' : 'Copy email address'}</button></div>
      {configured && <form className="contact-form" onSubmit={sendMessage} aria-label="Send Faizan a message" aria-busy={status === 'sending'} data-ph-no-capture>
        <fieldset disabled={status === 'sending'}>
          <legend>Send a message</legend>
          <div className="contact-form-grid">
            <label htmlFor="contact-name">Your name<input id="contact-name" name="from_name" autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
            <label htmlFor="contact-email">Email address<input id="contact-email" name="from_email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
            <label className="contact-field-wide" htmlFor="contact-subject">Subject<input id="contact-subject" name="subject" required maxLength={200} placeholder="What would you like to work on?" /></label>
            <label className="contact-field-wide" htmlFor="contact-message">Message<textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={5} placeholder="Tell me a little about your idea or opportunity." /></label>
          </div>
          <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Website<input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></label></div>
          <button className="button button-dark" type="submit"><Send size={17} aria-hidden="true" />{status === 'sending' ? 'Sending…' : 'Send message'}</button>
        </fieldset>
        <div className="contact-form-status" role="status" aria-live="polite" aria-atomic="true">
          {status === 'success' && <p>Thanks! Your message has been sent. I&apos;ll get back to you soon.</p>}
          {status === 'error' && <p>Your message could not be sent. Please check the fields and try again, or <a href={`mailto:${profile.email}`}>email me directly</a>.</p>}
        </div>
      </form>}
      <div className="contact-bottom"><a href={`mailto:${profile.email}`}><Mail size={17}/> {profile.email}</a><div className="contact-socials"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18}/> GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18}/> LinkedIn</a><a href={profile.huggingface} target="_blank" rel="noopener noreferrer">Hugging Face <ArrowRight size={17}/></a></div></div>
    </div>
  </section>;
}
