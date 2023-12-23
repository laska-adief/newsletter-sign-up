import iconSuccess from "../assets/icon-success.svg";

const SuccessSubscribe = () => {
  return (
    <div className="absolute top-0 right-0 bottom-0 left-0 bg-charcoal-grey text-dark-slate-grey">
      <div className="relative sm:rounded-lg bg-white w-full h-full p-4">
        <div className="h-full flex flex-col justify-center items-start -mt-16">
          <img src={iconSuccess} alt="icon-success" className="mb-4" />
          <h1 className="pb-4 font-bold text-4xl">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <div className="absolute left-4 right-4 bottom-8">
          <button
            type="button"
            className="w-full m-auto py-3 bg-dark-slate-grey text-white rounded-md text-sm font-semibold transition-colors duration-300 hover:bg-gradient-to-r from-tomato to-orange-hover">
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
};
export default SuccessSubscribe;
