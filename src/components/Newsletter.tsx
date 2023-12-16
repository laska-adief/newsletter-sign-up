import illustrationMobile from "./../assets/illustration-sign-up-mobile.svg";
import iconList from "./../assets/icon-list.svg";

const Newsletter = () => {
  const newsletterBenefit = ["Product discovery and building what matters", "Measuring to ensure updates are a success", "And much more!"];
  return (
    <div>
      <section className="flex flex-col sm:flex-row-reverse">
        <div>
          <img src={illustrationMobile} alt="illustration-sign-up" className="w-full" />
        </div>
        <div className="p-4 pt-6 text-charcoal-grey font-medium">
          <h2 className="pb-4 font-bold text-3xl text-dark-slate-grey">Stay updated!</h2>
          <p className="pb-4">Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="pb-8">
            {newsletterBenefit?.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-4 pb-2">
                <img src={iconList} alt="icon-list" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <form>
            <div className="mb-4">
              <div className="flex justify-between items-center text-xs mb-2">
                <label htmlFor="email" className="text-dark-slate-grey font-semibold">
                  Email address
                </label>
                <label className="text-tomato font-semibold">Valid email required</label>
              </div>
              <input
                type="email"
                id="email"
                placeholder="email@company.com"
                className="w-full border border-grey p-2 rounded-md focus:outline-none focus:border-dark-slate-grey focus:ring-0 focus:ring-dark-slate-grey"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-dark-slate-grey text-white rounded-md text-sm font-semibold transition-colors duration-300 hover:bg-gradient-to-r from-tomato to-orange-hover">
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Newsletter;