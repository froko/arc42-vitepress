import{_ as e,c as i,o as t,d as l}from"./app.d91ec24d.js";const o="/assets/05_building_blocks-EN.109022a8.png",g=JSON.parse('{"title":"Building Block View","description":"","frontmatter":{},"headers":[{"level":2,"title":"Whitebox Overall System","slug":"whitebox-overall-system","link":"#whitebox-overall-system","children":[{"level":3,"title":"<Name black box 1>","slug":"name-black-box-1","link":"#name-black-box-1","children":[]},{"level":3,"title":"<Name black box 2>","slug":"name-black-box-2","link":"#name-black-box-2","children":[]},{"level":3,"title":"<Name black box n>","slug":"name-black-box-n","link":"#name-black-box-n","children":[]},{"level":3,"title":"<Name interface 1>","slug":"name-interface-1","link":"#name-interface-1","children":[]},{"level":3,"title":"<Name interface m>","slug":"name-interface-m","link":"#name-interface-m","children":[]}]},{"level":2,"title":"Level 2","slug":"level-2","link":"#level-2","children":[{"level":3,"title":"White Box <building block 1>","slug":"white-box-building-block-1","link":"#white-box-building-block-1","children":[]},{"level":3,"title":"White Box <building block 2>","slug":"white-box-building-block-2","link":"#white-box-building-block-2","children":[]},{"level":3,"title":"White Box <building block m>","slug":"white-box-building-block-m","link":"#white-box-building-block-m","children":[]}]},{"level":2,"title":"Level 3","slug":"level-3","link":"#level-3","children":[{"level":3,"title":"White Box <_building block x.1_>","slug":"white-box-building-block-x-1","link":"#white-box-building-block-x-1","children":[]},{"level":3,"title":"White Box <_building block x.2_>","slug":"white-box-building-block-x-2","link":"#white-box-building-block-x-2","children":[]},{"level":3,"title":"White Box <_building block y.1_>","slug":"white-box-building-block-y-1","link":"#white-box-building-block-y-1","children":[]}]}],"relativePath":"building-block-view.md"}'),a={name:"building-block-view.md"},n=l('<h1 id="building-block-view" tabindex="-1">Building Block View <a class="header-anchor" href="#building-block-view" aria-hidden="true">#</a></h1><p><strong>Content.</strong></p><p>The building block view shows the static decomposition of the system into building blocks (modules, components, subsystems, classes, interfaces, packages, libraries, frameworks, layers, partitions, tiers, functions, macros, operations, datas structures, \u2026) as well as their dependencies (relationships, associations, \u2026)</p><p>This view is mandatory for every architecture documentation. In analogy to a house this is the <em>floor plan</em>.</p><p><strong>Motivation.</strong></p><p>Maintain an overview of your source code by making its structure understandable through abstraction.</p><p>This allows you to communicate with your stakeholder on an abstract level without disclosing implementation details.</p><p><strong>Form.</strong></p><p>The building block view is a hierarchical collection of black boxes and white boxes (see figure below) and their descriptions.</p><p><img src="'+o+'" alt="Hierarchy of building blocks"></p><p><strong>Level 1</strong> is the white box description of the overall system together with black box descriptions of all contained building blocks.</p><p><strong>Level 2</strong> zooms into some building blocks of level 1. Thus it contains the white box description of selected building blocks of level 1, together with black box descriptions of their internal building blocks.</p><p><strong>Level 3</strong> zooms into selected building blocks of level 2, and so on.</p><h2 id="whitebox-overall-system" tabindex="-1">Whitebox Overall System <a class="header-anchor" href="#whitebox-overall-system" aria-hidden="true">#</a></h2><p>Here you describe the decomposition of the overall system using the following white box template. It contains</p><ul><li><p>an overview diagram</p></li><li><p>a motivation for the decomposition</p></li><li><p>black box descriptions of the contained building blocks. For these we offer you alternatives:</p><ul><li><p>use <em>one</em> table for a short and pragmatic overview of all contained building blocks and their interfaces</p></li><li><p>use a list of black box descriptions of the building blocks according to the black box template (see below). Depending on your choice of tool this list could be sub-chapters (in text files), sub-pages (in a Wiki) or nested elements (in a modeling tool).</p></li></ul></li><li><p>(optional:) important interfaces, that are not explained in the black box templates of a building block, but are very important for understanding the white box. Since there are so many ways to specify interfaces why do not provide a specific template for them. In the worst case you have to specify and describe syntax, semantics, protocols, error handling, restrictions, versions, qualities, necessary compatibilities and many things more. In the best case you will get away with examples or simple signatures.</p></li></ul><p><em><strong>&lt;Overview Diagram&gt;</strong></em></p><p>Motivation</p><p>: <em>&lt;text explanation&gt;</em></p><p>Contained Building Blocks</p><p>: <em>&lt;Description of contained building block (black boxes)&gt;</em></p><p>Important Interfaces</p><p>: <em>&lt;Description of important interfaces&gt;</em></p><p>Insert your explanations of black boxes from level 1:</p><p>If you use tabular form you will only describe your black boxes with name and responsibility according to the following schema:</p><table><thead><tr><th><strong>Name</strong></th><th><strong>Responsibility</strong></th></tr></thead><tbody><tr><td>Black Box 1</td><td><em>&lt;Text&gt;</em></td></tr><tr><td>Black Box 2</td><td><em>&lt;Text&gt;</em></td></tr></tbody></table><p>If you use a list of black box descriptions then you fill in a separate black box template for every important building block . Its headline is the name of the black box.</p><h3 id="name-black-box-1" tabindex="-1">&lt;Name black box 1&gt; <a class="header-anchor" href="#name-black-box-1" aria-hidden="true">#</a></h3><p>Here you describe &lt;black box 1&gt; according the the following black box template:</p><ul><li><p>Purpose/Responsibility</p></li><li><p>Interface(s), when they are not extracted as separate paragraphs. This interfaces may include qualities and performance characteristics.</p></li><li><p>(Optional) Quality-/Performance characteristics of the black box, e.g.availability, run time behavior, \u2026.</p></li><li><p>(Optional) directory/file location</p></li><li><p>(Optional) Fulfilled requirements (if you need traceability to requirements).</p></li><li><p>(Optional) Open issues/problems/risks</p></li></ul><p><em>&lt;Purpose/Responsibility&gt;</em></p><p><em>&lt;Interface(s)&gt;</em></p><p><em>&lt;(Optional) Quality/Performance Characteristics&gt;</em></p><p><em>&lt;(Optional) Directory/File Location&gt;</em></p><p><em>&lt;(Optional) Fulfilled Requirements&gt;</em></p><p><em>&lt;(optional) Open Issues/Problems/Risks&gt;</em></p><h3 id="name-black-box-2" tabindex="-1">&lt;Name black box 2&gt; <a class="header-anchor" href="#name-black-box-2" aria-hidden="true">#</a></h3><p><em>&lt;black box template&gt;</em></p><h3 id="name-black-box-n" tabindex="-1">&lt;Name black box n&gt; <a class="header-anchor" href="#name-black-box-n" aria-hidden="true">#</a></h3><p><em>&lt;black box template&gt;</em></p><h3 id="name-interface-1" tabindex="-1">&lt;Name interface 1&gt; <a class="header-anchor" href="#name-interface-1" aria-hidden="true">#</a></h3><p>\u2026</p><h3 id="name-interface-m" tabindex="-1">&lt;Name interface m&gt; <a class="header-anchor" href="#name-interface-m" aria-hidden="true">#</a></h3><h2 id="level-2" tabindex="-1">Level 2 <a class="header-anchor" href="#level-2" aria-hidden="true">#</a></h2><p>Here you can specify the inner structure of (some) building blocks from level 1 as white boxes.</p><p>You have to decide which building blocks of your system are important enough to justify such a detailed description. Please prefer relevance over completeness. Specify important, surprising, risky, complex or volatile building blocks. Leave out normal, simple, boring or standardized parts of your system</p><h3 id="white-box-building-block-1" tabindex="-1">White Box <em>&lt;building block 1&gt;</em> <a class="header-anchor" href="#white-box-building-block-1" aria-hidden="true">#</a></h3><p>\u2026describes the internal structure of <em>building block 1</em>.</p><p><em>&lt;white box template&gt;</em></p><h3 id="white-box-building-block-2" tabindex="-1">White Box <em>&lt;building block 2&gt;</em> <a class="header-anchor" href="#white-box-building-block-2" aria-hidden="true">#</a></h3><p><em>&lt;white box template&gt;</em></p><p>\u2026</p><h3 id="white-box-building-block-m" tabindex="-1">White Box <em>&lt;building block m&gt;</em> <a class="header-anchor" href="#white-box-building-block-m" aria-hidden="true">#</a></h3><p><em>&lt;white box template&gt;</em></p><h2 id="level-3" tabindex="-1">Level 3 <a class="header-anchor" href="#level-3" aria-hidden="true">#</a></h2><p>Here you can specify the inner structure of (some) building blocks from level 2 as white boxes.</p><p>When you need more detailed levels of your architecture please copy this part of arc42 for additional levels.</p><h3 id="white-box-building-block-x-1" tabindex="-1">White Box &lt;_building block x.1_&gt; <a class="header-anchor" href="#white-box-building-block-x-1" aria-hidden="true">#</a></h3><p>Specifies the internal structure of <em>building block x.1</em>.</p><p><em>&lt;white box template&gt;</em></p><h3 id="white-box-building-block-x-2" tabindex="-1">White Box &lt;_building block x.2_&gt; <a class="header-anchor" href="#white-box-building-block-x-2" aria-hidden="true">#</a></h3><p><em>&lt;white box template&gt;</em></p><h3 id="white-box-building-block-y-1" tabindex="-1">White Box &lt;_building block y.1_&gt; <a class="header-anchor" href="#white-box-building-block-y-1" aria-hidden="true">#</a></h3><p><em>&lt;white box template&gt;</em></p>',64),r=[n];function s(c,b,d,h,p,m){return t(),i("div",null,r)}const x=e(a,[["render",s]]);export{g as __pageData,x as default};