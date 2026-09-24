'use client';

import { useState } from 'react';

// Replace these demonstration destinations with approved partner URLs and IDs before launch.
const FLIGHT_AFFILIATE_URL = 'https://www.skyscanner.com/';
const HOTEL_AFFILIATE_URL = 'https://www.booking.com/';
const INSURANCE_AFFILIATE_URL = 'https://www.worldnomads.com/';
const destinations = [
  { city: '曼谷', country: 'THAILAND', image: 'photo-1508009603885-50cf7c579365', note: '城市能量 × 慢活日常' },
  { city: '東京', country: 'JAPAN', image: 'photo-1503899036084-c55cdd92da26', note: '街區探索 × 靈感補給' },
  { city: '里斯本', country: 'PORTUGAL', image: 'photo-1555881400-74d7acaacd8b', note: '海風工作 × 黃昏散步' },
];
type EventPayload = { event: string; category: string; action: string; label: string };
declare global { interface Window { dataLayer?: EventPayload[]; gtag?: (...args: unknown[]) => void } }
function track(action: string, label: string) {
  if (typeof window === 'undefined') return;
  const payload: EventPayload = { event: 'nomadx_engagement', category: 'affiliate', action, label };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  window.gtag?.('event', action, { event_category: payload.category, event_label: label });
}
function AffiliateLink({ href, action, label, children, className }: { href: string; action: string; label: string; children: React.ReactNode; className: string }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer" onClick={() => track(action, label)}>{children}</a>;
}

export default function Home() {
  return <main id="top">
    <header className="nav wrap"><a className="brand" href="#top" aria-label="NomadX 首頁"><span className="brand-mark">N</span> Nomad<span className="brand-x">X</span></a><nav aria-label="主要導覽"><a href="#deals">熱門目的地</a><a href="#insurance">旅遊保險</a></nav><a className="nav-link" href="#deals">開始找旅程 <span aria-hidden="true">↗</span></a></header>
    <section className="hero wrap" aria-labelledby="hero-title"><div className="hero-copy"><div className="eyebrow"><span className="pulse"/> SMARTER TRIP, BETTER VALUE</div><h1 id="hero-title">機票＋住宿＋保險<br/><em>聰明比價，旅費更省。</em></h1><p className="hero-description">分開比較機票、住宿與旅遊保險，<br className="desktop-break"/>挑出符合預算的旅程組合。</p><div className="hero-actions"><AffiliateLink className="button button-primary" href={FLIGHT_AFFILIATE_URL} action="affiliate_click" label="flight_hero">✈ 比價特惠機票 <span>立即搜尋 ↗</span></AffiliateLink><AffiliateLink className="button button-secondary" href={HOTEL_AFFILIATE_URL} action="affiliate_click" label="hotel_hero">⌂ 比價精選住宿 <span>立即搜尋 ↗</span></AffiliateLink><AffiliateLink className="button button-tertiary" href={INSURANCE_AFFILIATE_URL} action="affiliate_click" label="insurance_hero">＋ 比較旅遊保險 <span>查看方案 ↗</span></AffiliateLink></div></div><div className="hero-visual" role="img" aria-label="里斯本街景與暖陽"><div className="hero-photo"/><div className="photo-chip">YOUR NEXT DESTINATION <span>38°43′ N · LISBON</span></div><div className="photo-caption"><span>MAKE ROOM FOR SOMEWHERE NEW</span><b>Somewhere<br/>under the sun.</b></div><div className="hero-stamp"><span>✳</span><small>GO<br/>SOMEWHERE</small></div></div></section>
    <section className="trust-strip"><div className="wrap trust-inner"><span>TRAVEL SMARTER</span><i/>先比價、再確認總額與保障，選好後前往平台購買。</div></section>
    <section className="saving-guide wrap" aria-labelledby="saving-title"><div className="section-heading"><div><div className="eyebrow muted">THREE STEPS TO A BETTER TRIP BUDGET</div><h2 id="saving-title">三步比一比，<em>把預算花在想去的地方。</em></h2></div></div><div className="saving-grid"><article><span className="saving-number">01</span><div><h3>機票｜彈性日期比航班</h3><p>前後日期一起查看，比較不同出發時間與行李條件，確認含稅總價再選購。</p><AffiliateLink className="saving-link" href={FLIGHT_AFFILIATE_URL} action="affiliate_click" label="flight_saving_guide">開始比機票 <span>↗</span></AffiliateLink></div></article><article><span className="saving-number">02</span><div><h3>住宿｜比較每晚總價</h3><p>依地點、入住日期與取消條件篩選，留意稅費及清潔費等額外費用。</p><AffiliateLink className="saving-link" href={HOTEL_AFFILIATE_URL} action="affiliate_click" label="hotel_saving_guide">開始比住宿 <span>↗</span></AffiliateLink></div></article><article><span className="saving-number">03</span><div><h3>保險｜按需求比較保障</h3><p>比較保費、承保項目與自負額，依行程和個人需要挑選合適方案。</p><AffiliateLink className="saving-link" href={INSURANCE_AFFILIATE_URL} action="affiliate_click" label="insurance_saving_guide">比較保險方案 <span>↗</span></AffiliateLink></div></article></div><p className="saving-note">價格與保障內容依日期、方案及個人條件而異；下單前請至服務平台確認。</p></section>
    <section className="deals wrap" id="deals"><div className="section-heading"><div><div className="eyebrow muted">START WITH A DESTINATION</div><h2>選好目的地，<em>接著比價。</em></h2></div><p>從熱門城市開始找旅程。</p></div><div className="city-grid">{destinations.map((place, index)=><article className="city-card" key={place.city}><div className="city-image" style={{backgroundImage:`linear-gradient(180deg,transparent 45%,#17201799),url(https://images.unsplash.com/${place.image}?auto=format&fit=crop&w=1000&q=78)`}}><span className="city-count">0{index+1}</span><span className="city-country">{place.country}</span></div><div className="city-content"><div><h3>{place.city}</h3><p>{place.note}</p></div><div className="city-actions"><AffiliateLink className="city-button city-flight" href={FLIGHT_AFFILIATE_URL} action="affiliate_click" label={`flight_${place.city}`}>✈ 比價機票 <span>↗</span></AffiliateLink><AffiliateLink className="city-button city-hotel" href={HOTEL_AFFILIATE_URL} action="affiliate_click" label={`hotel_${place.city}`}>⌂ 比價住宿 <span>↗</span></AffiliateLink></div></div></article>)}</div></section>
    <section className="insurance-wrap" id="insurance"><div className="insurance-card wrap"><div className="insurance-icon" aria-hidden="true">✳</div><div className="insurance-copy"><div className="eyebrow">TRAVEL WITH PEACE OF MIND</div><h2>為旅程多一份<em>安心準備。</em></h2><p>出發前了解旅遊保險選項，保障內容與適用條件請以保險服務提供者說明為準。</p></div><AffiliateLink className="button button-primary insurance-cta" href={INSURANCE_AFFILIATE_URL} action="affiliate_click" label="insurance_section">了解旅遊保險 <span>↗</span></AffiliateLink></div></section>
    <footer className="footer wrap"><a className="brand" href="#top"><span className="brand-mark">N</span> Nomad<span className="brand-x">X</span></a><span>Make room for somewhere new.</span><small>© 2026 NOMADX</small></footer>
  </main>;
}
