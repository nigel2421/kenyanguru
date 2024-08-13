"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62],{8062:function(e,s,a){a.r(s);var t=a(5893),i=a(7294),l=a(5697),n=a(9545),r=a(9595),c=a(8363),o=a(7500),d=a(3999);class h extends i.Component{componentDidMount(){let{vehicle:e}=this.props;(0,c.$f)(o.kE,"".concat(n.Z.vehicles,"?body_type=").concat(e.body_type),{},e=>{this.setState({vehicles:e.data.results})},e=>{(0,d.wp)("error","Error",(0,d.ur)(e))},()=>{this.setState({loading:!1})})}render(){let{vehicles:e,errors:s,loading:a,contacted:i}=this.state,{vehicle:l}=this.props;return e=e.slice(0,2),(0,t.jsx)("aside",{id:"sidebar",className:"col-md-4",style:{position:"relative",overflow:"visible",boxSizing:"border-box",minHeight:"1px"},children:(0,t.jsxs)("div",{className:"theiaStickySidebar",style:{paddingTop:"0px",paddingBottom:"1px",position:"static",transform:"none"},children:[(0,t.jsxs)("div",{className:"content-element3",children:[(0,t.jsxs)("div",{className:"sidebar-item dealer-item style-2",children:[(0,t.jsx)("div",{className:"dealer-title",children:(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsx)("h5",{children:(0,t.jsx)("a",{href:"#",children:"Gigi Motors Limited"})}),(0,t.jsx)("div",{className:"rating-area"})]})}),(0,t.jsx)("div",{className:"dealer-desc",children:(0,t.jsx)("div",{className:"contact-section",children:(0,t.jsxs)("div",{className:"contact-item",children:[(0,t.jsxs)("h6",{className:"contact-title",children:[(0,t.jsx)("i",{className:"licon-map-marker"}),(0,t.jsx)("span",{children:"Nairobi"})]}),(0,t.jsx)("span",{className:"contact-desc with-icon",children:(0,t.jsx)("a",{href:"https://goo.gl/maps/wnEMPBVSiBwUUKJ6A",target:"_blank",className:"link-text2 map-button",children:"Map & Directions"})})]})})})]}),(0,t.jsxs)("div",{className:"sidebar-item",children:[(0,t.jsxs)("a",{href:"tel:".concat(null==l?void 0:l.sales_person_phone_number),className:"btn btn-big btn-style-3 sidebar-btn",content:"telephone=no",children:[(0,t.jsx)("i",{className:"licon-telephone"}),(0,t.jsx)("b",{children:null==l?void 0:l.sales_person_phone_number})]}),(0,t.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=".concat(null==l?void 0:l.sales_person_phone_number,"&text=https://gigimotors.co.ke/view_car/").concat(null==l?void 0:l.slug),target:"_blank",className:"btn btn-big btn-style-1 sidebar-btn",content:"telephone=no",children:[(0,t.jsx)("i",{className:"icon-whatsapp"}),(0,t.jsx)("b",{children:"WhatsApp"})]})]}),(0,t.jsxs)("div",{className:"question-form bg-sidebar-item",children:[(0,t.jsx)("h5",{children:i?"Thank you for your enquiry":"Enquire"}),(0,t.jsx)("p",{className:"type-2",children:i?" we'll get back to you soon as possible as text":"All fields are required."}),!i&&(0,t.jsxs)("form",{onSubmit:this.handleSubmit,children:[(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("input",{onChange:e=>(0,d.vl)(e,this),className:"",placeholder:"Name",name:"name",type:"text"}),s.name&&(0,t.jsx)("p",{className:"small text-danger",children:s.name[0]})]}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("input",{onChange:e=>(0,d.vl)(e,this),className:"",placeholder:"Email",name:"email",type:"email"}),s.email&&(0,t.jsx)("p",{className:"small text-danger",children:s.email[0]})]}),(0,t.jsx)("div",{className:"form-cols",children:(0,t.jsx)("div",{className:"form-collumn col-sm-12",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("input",{onChange:e=>(0,d.vl)(e,this),className:"",placeholder:"Phone Number",name:"phone_number",type:"number"}),s.phone_number&&(0,t.jsx)("p",{className:"small text-danger",children:s.phone_number[0]})]})})}),(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("textarea",{className:"",name:"text",onChange:e=>(0,d.vl)(e,this),placeholder:"Type here to let us know how we can be of assistance. You can book a test drive or request for more photos, we are here to assist.",rows:"4"}),s.text&&(0,t.jsx)("p",{className:"small text-danger",children:s.text[0]})]}),(0,t.jsx)("button",{disabled:a,className:"btn btn-style-3",id:"submit",name:"submit",type:"submit",children:a?"Loading..":"Send Message"})]})]})]}),(0,t.jsx)("h6",{children:"More Stock"}),(0,t.jsx)("div",{className:"products-holder view-list",children:e.map(e=>(0,t.jsx)(r.default,{vehicle:e},e.id))})]})})}constructor(...e){super(...e),this.state={vehicles:[],errors:{},data:{},contacted:!1},this.handleSubmit=e=>{e.preventDefault();let{vehicle:s}=this.props,{data:a}=this.state;a.vehicle=s.slug,this.setState({loading:!0,errors:{}}),(0,c.$f)(o.pg,n.Z.vehicle_enquiries,a,()=>{(0,d.wp)("success","Success!","Your query was submitted successfully!"),this.setState({data:{},contacted:!0})},e=>{400===e.response.status?this.setState({errors:e.response.data}):(0,d.wp)("error","Error",(0,d.ur)(e))},()=>{this.setState({loading:!1})})}}}h.propTypes={vehicle:l.any},s.default=h},9595:function(e,s,a){a.r(s);var t=a(5893),i=a(7294),l=a(3999),n=a(1148),r=a(9545);class c extends i.Component{componentDidMount(){let{vehicle:e}=this.props;(0,n.H)(this,"".concat(r.Z.vehicle_images,"?vehicle__slug=").concat(null==e?void 0:e.slug),"images")}render(){var e,s,a,i;let{images:n}=this.state,{vehicle:r}=this.props,c="/view_car/".concat(null==r?void 0:r.slug);return(0,t.jsxs)("div",{className:"product",children:[(0,t.jsx)("div",{className:"product-image",children:(0,t.jsx)("a",{href:c,children:n.length>0?(0,t.jsx)("img",{style:{height:"87px",width:"130px"},src:n[0].image,alt:""}):(0,t.jsx)("img",{style:{height:"87px",width:"130px"},src:"/assets/img/404.png",alt:""})})}),(0,t.jsxs)("div",{className:"product-description",children:[(0,t.jsx)("h5",{className:"product-name",children:(0,t.jsxs)("a",{href:c,children:[(null==r?void 0:null===(e=r.model)||void 0===e?void 0:null===(s=e.make)||void 0===s?void 0:s.name)||"-"," ",(null==r?void 0:null===(a=r.model)||void 0===a?void 0:a.name)||"-"]})}),(0,t.jsx)("div",{className:"pricing-area",children:(0,t.jsxs)("div",{className:"product-price",children:[null!==(i=null==r?void 0:r.currency)&&void 0!==i?i:"KES"," ",(0,l.x6)((null==r?void 0:r.selling_price)||"-")]})})]})]})}constructor(...e){super(...e),this.state={images:[]}}}s.default=c}}]);