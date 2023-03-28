import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas
            ultrices consectetur adipiscing ultricies enim.{" "}
          </p>
          <p>&copy; Blah blah all rights</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">blah bla bladdiy blah</p>
          <p className="my-5">blah bla bladdiy blah</p>
          <p>blah</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">blah bla bladdiy blah</p>
          <p>blah</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
