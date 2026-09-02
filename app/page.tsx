"use client";
import { useEffect, useMemo, useState } from "react";
type Category = "Todos" | "Lojas" | "Delivery" | "Clínicas";
type Project = { title: string; category: Exclude<Category, "Todos">; image: string; description: string; index: string };
const contactUrl = "https://contate.me/5511914288729";
const instagramUrl = "https://www.instagram.com/influrvy/";
const projects: Project[] = [
 { title:"Andra Elétrica",category:"Lojas",image:"/projects/andra.png",description:"Catálogo completo, ofertas e compra rápida para materiais elétricos.",index:"01" },
 { title:"Santil Iluminação",category:"Lojas",image:"/projects/santil.png",description:"E-commerce de iluminação com descoberta por ambiente e categoria.",index:"02" },
 { title:"Fogões Shop",category:"Lojas",image:"/projects/fgs.png",description:"Loja de construção com vitrine de produtos e navegação por coleção.",index:"03" },
 { title:"Manihi Sushi",category:"Delivery",image:"/projects/sushi.png",description:"Cardápio elegante para transformar desejo em pedido.",index:"04" },
 { title:"Flying Sushi",category:"Delivery",image:"/projects/sushi2.png",description:"Experiência de rodízio, unidades e delivery em um só lugar.",index:"05" },
 { title:"Pastéis de Vento",category:"Delivery",image:"/projects/pastel.png",description:"Marca vibrante com cardápio, unidades e chamada para contato.",index:"06" },
 { title:"Veridiana Pizzaria",category:"Delivery",image:"/projects/pizza.png",description:"Presença premium para reservas, cardápio e pedidos.",index:"07" },
 { title:"Clínica Camila Pimenta",category:"Clínicas",image:"/projects/clinica.png",description:"Jornada completa de confiança, serviços e agendamento.",index:"08" },
 { title:"OdontoFrison",category:"Clínicas",image:"/projects/clins.png",description:"Tecnologia e acolhimento para uma clínica odontológica moderna.",index:"09" },
 { title:"Dra. Mayara Vianna",category:"Clínicas",image:"/projects/clinnc.png",description:"Estética e restauração com uma identidade sofisticada.",index:"10" },
];
export default function Home(){
 const [filter,setFilter]=useState<Category>("Todos"); const [selected,setSelected]=useState<Project|null>(null);
 const visible=useMemo(()=>filter==="Todos"?projects:projects.filter(p=>p.category===filter),[filter]);
 useEffect(()=>{const h=(e:KeyboardEvent)=>e.key==="Escape"&&setSelected(null);document.addEventListener("keydown",h);return()=>document.removeEventListener("keydown",h)},[]);
 return <main onPointerMove={e=>{document.documentElement.style.setProperty("--pointer-x",`${e.clientX}px`);document.documentElement.style.setProperty("--pointer-y",`${e.clientY}px`)}}>
  <div className="noise"/><div className="cursor-glow"/>
  <nav className="nav"><a className="brand" href="#inicio"><span className="brand-mark">i</span>influrvy<span className="brand-dot">.</span></a><div className="nav-links"><a href="#projetos">Projetos</a><a href="#processo">Processo</a><a href="#contato">Contato</a></div><a className="nav-cta" href={contactUrl} target="_blank" rel="noreferrer">Vamos conversar <span>↗</span></a></nav>
  <section className="hero" id="inicio"><div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/><div className="hero-content"><p className="eyebrow"><span className="eyebrow-dot"/> Estúdio digital independente</p><h1>Sites que fazem<br/><em>negócios brilharem.</em></h1><p className="hero-lead">Design, estratégia e tecnologia para transformar a presença digital de marcas ambiciosas.</p><div className="hero-actions"><a className="primary-button" href="#projetos">Explorar projetos <span>↓</span></a><a className="ghost-link" href={instagramUrl} target="_blank" rel="noreferrer">@influrvy no Instagram <span>↗</span></a></div></div><div className="hero-side"><div className="hero-card"><span>INFLURVY</span><strong>digital<br/>experiences</strong><div className="hero-card-line"/><small>BR / 2026</small></div><p className="hero-side-caption">Do primeiro clique<br/>à próxima conversa.</p></div></section>
  <section className="intro-strip" id="processo"><p>Um bom site não só mostra.<br/><strong>Ele move.</strong></p><div className="intro-line"/><span>Identidade · Experiência · Conversão</span></section>
  <section className="projects-section" id="projetos"><div className="section-heading"><div><p className="eyebrow">Projetos selecionados</p><h2>Feitos para<br/><em>ser lembrados.</em></h2></div><p className="section-note">Uma seleção de experiências que criamos para lojas, deliverys e clínicas.</p></div><div className="filters">{(["Todos","Lojas","Delivery","Clínicas"] as Category[]).map(i=><button key={i} className={filter===i?"active":""} onClick={()=>setFilter(i)}>{i}</button>)}</div><div className="project-grid">{visible.map(p=><article className="project-card" key={p.title}><button className="project-image-button" onClick={()=>setSelected(p)} aria-label={`Abrir projeto ${p.title}`}><img src={p.image} alt={`Preview do site ${p.title}`}/><span className="open-project">Ver projeto <b>↗</b></span></button><div className="project-meta"><div><span className="project-index">{p.index}</span><h3>{p.title}</h3><p>{p.description}</p></div><span className="project-category">{p.category}</span></div></article>)}</div></section>
  <section className="contact-section" id="contato"><div><p className="eyebrow">Tem uma ideia?</p><h2>Vamos criar algo<br/><em>impossível de ignorar.</em></h2></div><a className="contact-button" href={contactUrl} target="_blank" rel="noreferrer">Falar com a Influrvy <span>↗</span></a></section>
  <footer><a className="brand" href="#inicio"><span className="brand-mark">i</span>influrvy<span className="brand-dot">.</span></a><p>Design que aproxima marcas e pessoas.</p><div className="footer-links"><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a><a href={contactUrl} target="_blank" rel="noreferrer">Contato ↗</a></div><small>© {new Date().getFullYear()} Influrvy</small></footer>
  {selected&&<div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setSelected(null)}><div className="lightbox-inner" onClick={e=>e.stopPropagation()}><button className="close-lightbox" onClick={()=>setSelected(null)} aria-label="Fechar imagem">×</button><img src={selected.image} alt={`Imagem ampliada do projeto ${selected.title}`}/><div className="lightbox-caption"><span>{selected.category}</span><strong>{selected.title}</strong></div></div></div>}
 </main>;
}
