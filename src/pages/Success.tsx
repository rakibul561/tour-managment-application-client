

import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";

export default  function SuccessPayment () {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <Logo/>
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
               Your Payment is {" "}
                <span className="text-primary">Successfull</span>
              </h1>
              <p className="mx-auto max-w-3xl  lg:text-xl">
                thank you for your payment. please visit our another package and booking and you may go then enjoy
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <Button className="shadow-sm transition-shadow hover:shadow">
              <Link to="/">  Back Home</Link>
              </Button>
             
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

