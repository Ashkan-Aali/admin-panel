import React, { useContext } from "react";
import { AdminContext } from "../../../context/adminLayoutContext";
import Avatar from "./Avatar";
import SidebarTitle from "./SidebarItem";
import SidebarGroupTitle from "./SidebarGroupTitle";
import SidebarItem from "./SidebarItem";

const Index = () => {
  const { showSidebar } = useContext(AdminContext);
  return (
    <section id="sidebar_section">
      <div
        className={`mini_sidebar collapsedd bg-dark h-100 ${
          showSidebar ? "expanded" : null
        }`}
      >
        <div className="p-0 m-0">
          <Avatar
            name={"قاسم بساکی"}
            imagePath={"/assets/images/avatar/user2.jpg"}
          />

          <SidebarItem targetPath="/" Item={"داشبورد"} icon={"fas fa-tachometer-alt"} />
          {/* <!-- =================================== --> */}
          <SidebarGroupTitle title={"فروشگاه"} />
          {/* ------------------------- */}

          <SidebarItem targetPath="/categories" Item={"مدیریت گروه محصول"} icon={"fas fa-stream"} />
          <SidebarItem targetPath="/products" Item={"مدیریت محصول"} icon={"fas fa-cube"} />
          <SidebarItem targetPath="/brands" Item={"مدیریت برند ها"} icon={"fas fa-copyright"} />
          <SidebarItem targetPath="/guaranties" Item={"مدیریت گارانتی ها"} icon={"fab fa-pagelines"} />
          <SidebarItem targetPath="/colors" Item={"مدیریت رنگ ها"} icon={"fas fa-palette"} />
          <SidebarItem targetPath="/discounts" Item={"مدیریت تخفیف ها"} icon={"fas fa-percentage"} />

          {/* <!-- =================================== --> */}

          <SidebarGroupTitle title={"سفارشات و سبد"} />

          <SidebarItem targetPath="/carts" Item={"مدیریت سبد ها"} icon={"fas fa-shopping-basket"} />
          <SidebarItem targetPath="/orders" Item={"مدیریت سفارشات"} icon={"fas fa-luggage-cart"} />
          <SidebarItem targetPath="/deliveries"
            Item={"مدیریت نحوه ارسال"}
            icon={"fas fa-truck-loading"}
          />

          {/* <!-- =================================== --> */}

          <SidebarGroupTitle title={"کاربران و همکاران"} />

          <SidebarItem targetPath="/users" Item={"مشاهده کاربران"} icon={"fas fa-users"} />
          <SidebarItem targetPath="/roles" Item={"نقش ها"} icon={"fas fa-user-tag"} />
          <SidebarItem targetPath="/permissions" Item={"مجوز ها"} icon={"fas fa-shield-alt"} />
          {/* <!-- =================================== --> */}

          <SidebarGroupTitle title={"ارتباطات"} />

          <SidebarItem targetPath="/questions" Item={"سوال ها"} icon={"fas fa-question-circle"} />
          <SidebarItem targetPath="/comments" Item={"نظرات"} icon={"fas fa-comment"} />
        </div>
      </div>
    </section>
  );
};

export default Index;
