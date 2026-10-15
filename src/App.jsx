import { useState } from 'react';
import { HashRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowUpRight, BookOpen, ChevronDown, Menu, X } from 'lucide-react';
import { HomePage, SchoolPage, FormationsPage, FormationDetailPage, PedagogyPage, AdmissionsPage, ContactPage, NotFoundPage } from './pages/Pages.jsx';

function Brand({light=false}) { return <Link className={`brand ${light?'brand-light':''}`} to="/" aria-label="ESMES Business School, accueil"><span className="brand-mark">E<span>S</span></span><span className="brand-copy"><strong>ESMES</strong><small>BUSINESS SCHOOL</small></span></Link>; }
function Header() {
  const [menuOpen,setMenuOpen]=useState(false);
  const location=useLocation();
  const close=()=>setMenuOpen(false);
  const navClass=({isActive})=>isActive?'nav-link nav-link-active':'nav-link';
  return <>
    <div className="topline"><span>Construisez votre avenir, dès aujourd’hui.</span><Link to="/contact">Parlons de votre projet <ArrowUpRight size={14}/></Link></div>
    <header className="header"><div className="container nav-wrap"><Brand/><button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?'Fermer le menu':'Ouvrir le menu'}>{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?'nav nav-open':'nav'} aria-label="Navigation principale">
        <NavLink onClick={close} className={navClass} to="/ecole">L’école</NavLink>
        <NavLink onClick={close} className={navClass} to="/formations">Formations <ChevronDown size={14}/></NavLink>
        <NavLink onClick={close} className={navClass} to="/pedagogie">Notre pédagogie</NavLink>
        <NavLink onClick={close} className={navClass} to="/admissions">Admissions</NavLink>
        <NavLink onClick={close} className={navClass} to="/contact">Contact</NavLink>
        <Link onClick={close} className="nav-cta" to="/contact">Candidater <ArrowUpRight size={16}/></Link>
      </nav></div></header>
  </>;
}
function Footer() {
  return <footer className="footer"><div className="container footer-main"><div className="footer-brand"><Brand light/><p>Former les professionnels<br/>responsables de demain.</p></div><div className="footer-column"><strong>Explorer</strong><Link to="/ecole">L’école</Link><Link to="/formations">Nos formations</Link><Link to="/pedagogie">Notre pédagogie</Link></div><div className="footer-column"><strong>Votre parcours</strong><Link to="/admissions">Admissions</Link><Link to="/contact">Être accompagné</Link><a href="https://www.esmes-lyon.com/" target="_blank" rel="noreferrer">Site officiel</a></div><div className="footer-note"><span className="footer-badge"><BookOpen size={16}/> LE SAVOIR EN ACTION</span><p>Des compétences concrètes.<br/>Une ambition responsable.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} ESMES Business School</span><span>Design & expérience — Lyon, France</span><Link to="/">Retour à l’accueil ↑</Link></div></footer>;
}
function ScrollToTop(){const location=useLocation();useState(()=>{if(typeof window!=='undefined')window.scrollTo(0,0);});return null;}
function Site() { return <><Header/><main><Routes><Route path="/" element={<HomePage/>}/><Route path="/ecole" element={<SchoolPage/>}/><Route path="/formations" element={<FormationsPage/>}/><Route path="/formations/:slug" element={<FormationDetailPage/>}/><Route path="/pedagogie" element={<PedagogyPage/>}/><Route path="/admissions" element={<AdmissionsPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes></main><Footer/></>; }
export default function App(){return <HashRouter><Site/></HashRouter>;}
