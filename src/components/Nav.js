const Nav = {
    render() {
        return /* html */`
            <nav>
                <ul class="menu">
                    <li class=menu-item><a href="/" class=menu-item_link>Trang chủ</li>
                    <li class=menu-item><a href="/news" class=menu-item_link>Tuyển Sinh</li>
                    <li class=menu-item><a href="/ctdt" class=menu-item_link>Chương trình đào tạo</li>
                    <li class=menu-item><a href="/gocts" class=menu-item_link>Góc tuyển sinh</li>
                    <li class=menu-item><a href="/tuyendung" class=menu-item_link>Tuyển dụng</li>
                </ul>
                <div class="input">
                    <input class="w-60" type="text" >
                    <button class="border border-sky-500 bg-blue-900 text-white "><a class="" href="">Tìm kiếm</a></button>
                </div>
            </nav>`;
    },
};
export default Nav;