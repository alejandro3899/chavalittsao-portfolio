export default function PrivacyPolicy() {
  return (
    <>
      <section className="w-full flex justify-center pt-[var(--nav-offset)]">
        <div className="container flex md:flex-row flex-col justify-between gap-8">
          <div className="max-w-[280px]">
            <h1 className="text-2xl sm:text-[32px]">PRIVACY POLICY</h1>
          </div>

          <div className="w-full md:max-w-[60%] max-w-[680px]">
            <div className="mb-4">
              <p className="text-xs leading-[1.4]">
                Our website is committed to protecting your privacy and personal
                information. We provide this Privacy Policy to inform users of
                the web site located at https://fredericktsao.com, and all
                associated sites linked to https://fredericktsao.com
                (collectively, the “Site“) of our policies and procedures
                regarding the collection, use and disclosure of Personal Data
                and other information. This Privacy Policy explains what data we
                collect when you use the Website and/or the Service, why we
                collect the data, how it is used and your rights and choices.
                <br />
                By using or accessing the Site and providing us with your
                Personal Data, you are accepting the policies and procedures set
                out in this Privacy Policy, and you are consenting to our
                processing of your data as set out in this Privacy Policy now
                and as amended by us from time to time.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="uppercase text-sm mb-2">Information We Collect</h3>
              <p className="text-xs leading-[1.4]">
                We only collect email addresses from users who voluntarily
                provide them to us through the newsletter sign-up form on the
                Site for the purpose of subscribing to our newsletters and other
                materials. We do not collect any other personal information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
