import{_ as o,X as l,Y as r,Z as e,$ as t,a0 as a,a1 as h,a2 as d,H as i}from"./framework-c1ee72d8.js";const p={},c=e("h2",{id:"for-end-users",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#for-end-users","aria-hidden":"true"},"#"),t(" For end-users")],-1),u=d('<p>If the error persists, submit an issue to the maintainer of the repository requesting to update to latest version of abapGit serialized files pointing to the guide below.</p><p>Or alternatively install an old version of abapGit to allow for installing the files, see next section &quot;For maintainers&quot;</p><h2 id="for-maintainers" tabindex="-1"><a class="header-anchor" href="#for-maintainers" aria-hidden="true">#</a> For maintainers</h2><p>If the latest version of abapGit is installed and the error message is shown, then the serialized files should be updated to the latest version.</p><p>The steps are:</p><ol><li>Install the old abapGit version, matching the serialized files</li><li>Install the objects into the ABAP system</li><li>Install the newest abapGit version</li><li>Use the new abapGit to save the files to the git repository</li></ol><p>This will overwrite the files in the repository to have the latest format, compatible with the newest abapGit release.</p>',7),f=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"abapGit"),e("th",{style:{"text-align":"left"}},"Download"),e("th",{style:{"text-align":"left"}},"XML Serialization")])],-1),_=e("td",{style:{"text-align":"left"}},"v1.0.0 to current",-1),m={style:{"text-align":"left"}},g={href:"https://raw.githubusercontent.com/abapGit/build/main/zabapgit_standalone.prog.abap",target:"_blank",rel:"noopener noreferrer"},b=e("td",{style:{"text-align":"left"}},"v1.0.0",-1);function x(v,y){const s=i("RouterLink"),n=i("ExternalLinkIcon");return l(),r("div",null,[c,e("p",null,[t("Make sure you have the latest version of abapGit installed, see "),a(s,{to:"/user-guide/getting-started/upgrade.html"},{default:h(()=>[t("upgrading")]),_:1}),t(", after updating try again.")]),u,e("table",null,[f,e("tbody",null,[e("tr",null,[_,e("td",m,[e("a",g,[t("Link"),a(n)])]),b])])])])}const G=o(p,[["render",x],["__file","xml-mismatch.html.vue"]]);export{G as default};