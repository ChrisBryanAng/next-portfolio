import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-9 lg:px-44">
        <Navbar />
        <GetInTouch />
        <Form />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
