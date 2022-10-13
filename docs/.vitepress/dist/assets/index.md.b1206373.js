import{_ as e,c as t,o as i,d as a}from"./app.d91ec24d.js";const s="/assets/01-intro-and-goals.583b4566.png",r="/assets/02-constraints-overview.dc6d3bb6.png",n="/assets/03-context-overview.b47b3b88.png",o="/assets/04-solution-strategy-overview.a1994e6a.png",c="/assets/05-building-block-overview.49a2ae3d.png",l="/assets/06-runtime-overview.f15295d8.png",d="/assets/07-deployment-overview.08e0d4ac.png",h="/assets/08-concepts-overview.1f239469.png",u="/assets/09-decision-overview.82328094.png",p="/assets/10-q-scenario-overview.729dd6c0.png",m="/assets/11-risk-overview.87d70ffb.png",g="/assets/12-glossary-overview.71b0b774.png",D=JSON.parse('{"title":"About arc42","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. Introduction and Goals","slug":"_1-introduction-and-goals","link":"#_1-introduction-and-goals","children":[]},{"level":2,"title":"2. Architecture Constraints","slug":"_2-architecture-constraints","link":"#_2-architecture-constraints","children":[]},{"level":2,"title":"3. Context and scope","slug":"_3-context-and-scope","link":"#_3-context-and-scope","children":[]},{"level":2,"title":"4. Solution Strategy","slug":"_4-solution-strategy","link":"#_4-solution-strategy","children":[]},{"level":2,"title":"5. Building Block View","slug":"_5-building-block-view","link":"#_5-building-block-view","children":[]},{"level":2,"title":"6. Runtime View","slug":"_6-runtime-view","link":"#_6-runtime-view","children":[]},{"level":2,"title":"7. Deployment View","slug":"_7-deployment-view","link":"#_7-deployment-view","children":[]},{"level":2,"title":"8. Crosscutting Concepts","slug":"_8-crosscutting-concepts","link":"#_8-crosscutting-concepts","children":[]},{"level":2,"title":"9. Architecture Decisions","slug":"_9-architecture-decisions","link":"#_9-architecture-decisions","children":[]},{"level":2,"title":"10. Quality Requirements","slug":"_10-quality-requirements","link":"#_10-quality-requirements","children":[]},{"level":2,"title":"11. Risks and Technical Debt","slug":"_11-risks-and-technical-debt","link":"#_11-risks-and-technical-debt","children":[]},{"level":2,"title":"12. Glossary","slug":"_12-glossary","link":"#_12-glossary","children":[]}],"relativePath":"index.md"}'),_={name:"index.md"},b=a('<h1 id="about-arc42" tabindex="-1">About arc42 <a class="header-anchor" href="#about-arc42" aria-hidden="true">#</a></h1><p>arc42, the Template for documentation of software and system architecture.</p><p>By Dr. Gernot Starke, Dr. Peter Hruschka and contributors.</p><p>Template Revision: 7.0 EN (based on asciidoc), January 2017</p><p>\xA9 We acknowledge that this document uses material from the arc 42 architecture template, <a href="http://www.arc42.de" target="_blank" rel="noreferrer">http://www.arc42.de</a>. Created by Dr. Peter Hruschka &amp; Dr. Gernot Starke.</p><blockquote><p><strong>Note</strong></p><p>This version of the template contains some help and explanations. It is used for familiarization with arc42 and the understanding of the concepts. For documentation of your own system you use better the <em>plain</em> version.</p></blockquote><h2 id="_1-introduction-and-goals" tabindex="-1">1. Introduction and Goals <a class="header-anchor" href="#_1-introduction-and-goals" aria-hidden="true">#</a></h2><p>Short description of the requirements, driving forces, extract (or abstract) of requirements. Top three (max five) quality goals for the architecture which have highest priority for the major stakeholders. A table of important stakeholders with their expectation regarding architecture.<br><img src="'+s+'" alt="Introduction and Goals"></p><h2 id="_2-architecture-constraints" tabindex="-1">2. Architecture Constraints <a class="header-anchor" href="#_2-architecture-constraints" aria-hidden="true">#</a></h2><p>Anything that constrains teams in design and implementation decisions or decision about related processes. Can sometimes go beyond individual systems and are valid for whole organizations and companies.<br><img src="'+r+'" alt="Architecture Constraints"></p><h2 id="_3-context-and-scope" tabindex="-1">3. Context and scope <a class="header-anchor" href="#_3-context-and-scope" aria-hidden="true">#</a></h2><p>Delimits your system from its (external) communication partners (neighboring systems and users). Specifies the external interfaces. Shown from a business/domain perspective (always) or a technical perspective (optional).<br><img src="'+n+'" alt="Context and scope"></p><h2 id="_4-solution-strategy" tabindex="-1">4. Solution Strategy <a class="header-anchor" href="#_4-solution-strategy" aria-hidden="true">#</a></h2><p>Summary of the fundamental decisions and solution strategies that shape the architecture. Can include technology, top-level decomposition, approaches to achieve top quality goals and relevant organizational decisions.<br><img src="'+o+'" alt="Solution Strategy"></p><h2 id="_5-building-block-view" tabindex="-1">5. Building Block View <a class="header-anchor" href="#_5-building-block-view" aria-hidden="true">#</a></h2><p>Static decomposition of the system, abstractions of source-code, shown as hierarchy of white boxes (containing black boxes), up to the appropriate level of detail.<br><img src="'+c+'" alt="Building Block View"></p><h2 id="_6-runtime-view" tabindex="-1">6. Runtime View <a class="header-anchor" href="#_6-runtime-view" aria-hidden="true">#</a></h2><p>Behavior of building blocks as scenarios, covering important use cases or features, interactions at critical external interfaces, operation and administration plus error and exception behavior.<br><img src="'+l+'" alt="Runtime View"></p><h2 id="_7-deployment-view" tabindex="-1">7. Deployment View <a class="header-anchor" href="#_7-deployment-view" aria-hidden="true">#</a></h2><p>Technical infrastructure with environments, computers, processors, topologies. Mapping of (software) building blocks to infrastructure elements.<br><img src="'+d+'" alt="Deployment View"></p><h2 id="_8-crosscutting-concepts" tabindex="-1">8. Crosscutting Concepts <a class="header-anchor" href="#_8-crosscutting-concepts" aria-hidden="true">#</a></h2><p>Overall, principal regulations and solution approaches relevant in multiple parts (\u2192 cross-cutting) of the system. Concepts are often related to multiple building blocks. Include different topics like domain models, architectur patterns and -styles, rules for using specific technology and inmplementation rules.<br><img src="'+h+'" alt="Crosscutting Concepts"></p><h2 id="_9-architecture-decisions" tabindex="-1">9. Architecture Decisions <a class="header-anchor" href="#_9-architecture-decisions" aria-hidden="true">#</a></h2><p>Important, expensive, critical, large scale or risky architecture decisions including rationals.<br><img src="'+u+'" alt="Architecture Decisions"></p><h2 id="_10-quality-requirements" tabindex="-1">10. Quality Requirements <a class="header-anchor" href="#_10-quality-requirements" aria-hidden="true">#</a></h2><p>Quality requirements as scenarios, with quality tree to provide high-level overview. The most important quality goals should have been described in section 1.2. (quality goals).<br><img src="'+p+'" alt="Quality Requirements"></p><h2 id="_11-risks-and-technical-debt" tabindex="-1">11. Risks and Technical Debt <a class="header-anchor" href="#_11-risks-and-technical-debt" aria-hidden="true">#</a></h2><p>Known technical risks or technical debt. What potential problems exist within or around the system? What does the development team feel miserable about?<br><img src="'+m+'" alt="Risks and Technical Debt"></p><h2 id="_12-glossary" tabindex="-1">12. Glossary <a class="header-anchor" href="#_12-glossary" aria-hidden="true">#</a></h2><p>Important domain and technical terms that stakeholders use when discussing he system. Also: translation reference if you work in a multi-language environment.<br><img src="'+g+'" alt="Risks and Technical Debt"></p>',30),v=[b];function f(y,w,k,x,q,C){return i(),t("div",null,v)}const T=e(_,[["render",f]]);export{D as __pageData,T as default};
