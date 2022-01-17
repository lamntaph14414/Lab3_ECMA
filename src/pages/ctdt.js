import Header from "../components/Header";
import Nav from "../components/Nav";

const CTDT = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto">
        <header>
            ${Header.render()}
            ${Nav.render()}
        </header>
        
        <section class="news">
            <h2 class="text-2xl text-[#272f53] font-semibold my-4 uppercase">Chương trình đào tạo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio temporibus, delectus illum quidem praesentium rerum magnam nulla repudiandae, exercitationem nam omnis enim qui. Repudiandae consequatur officia ipsam veniam, illo hic?</p>
            
        </section>
        `;
    },
};
export default CTDT;