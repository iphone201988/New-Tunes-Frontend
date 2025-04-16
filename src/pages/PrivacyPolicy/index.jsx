import React from "react";

const PrivacyPolicy = () => {
  return <>
     <section className="banner-sec h-[28vh] relative">
        <div className="px-[20px] max-w-[1600px] mx-auto h-full flex justify-center items-center isolate">
            <h2 className="text-[46px] font-bold flex flex-col items-center text-center uppercase max-md:text-[36px]">
                NewTunes Privacy Policy
            </h2>
        </div>
    </section>

    <section className='my-[40px]'>
        <div className="px-[20px] max-w-[1200px] mx-auto p-[40px] border border-[#EEEEEE] rounded-[16px]">

            <h4 className='text-[26px] mt-[0px] font-bold'>1. Overview</h4>
            <p className='mt-[10px]'>This Privacy Policy explains how NewTunes LLC (“NewTunes”, “we”, “us”, or “our”)
                collects, uses, shares, and protects your personal data when you use the NewTunes mobile application
                or any services linked to this policy.</p>
            <p className='mt-[10px]'>This policy applies to:</p>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Listeners and artists who use the NewTunes mobile app</li>
                <li>Visitors to newtunesapp.com</li>
                <li>Individuals who contact or interact with us</li>
            </ul>
            <p className='mt-[10px]'>By using NewTunes, you agree to the practices described in this policy.</p>

            <h4 className='text-[26px] mt-[26px] font-bold'>2. Information We Collect</h4>
            <p className='mt-[10px]'>We collect the following categories of data:</p>
            <h5 className='text-[18px] mt-[8px] font-semibold'>Account and Profile Data</h5>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Name, email, username, password</li>
                <li>Profile picture, biography</li>
                <li>Age and gender (optional)</li>
            </ul>

            <h5 className='text-[18px] mt-[8px] font-semibold'>Usage and Discovery Data</h5>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Likes, dislikes, swipes, skips</li>
                <li>Playlist activity and discovery behavior</li>
                <li>In-app preferences, notifications, and interactions</li>
            </ul>

            <h5 className='text-[18px] mt-[8px] font-semibold'>Connected Streaming Data</h5>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Spotify, Apple Music, or YouTube Music listening history (if linked)</li>
                <li>Public playlists, playback info (authorized via API)</li>
            </ul>

            <h5 className='text-[18px] mt-[8px] font-semibold'>Device and Technical Data</h5>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Device model, OS version, app version</li>
                <li>IP address, language, region, country</li>
                <li>Session logs and crash reports</li>
            </ul>

            <h5 className='text-[18px] mt-[8px] font-semibold'>Support and Feedback</h5>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Help desk messages and user-reported issues</li>
                <li>Ratings, bug reports, feedback forms</li>
            </ul>

            <h5 className='text-[18px] mt-[8px] font-semibold'>Purchase and Transaction Data</h5>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Apple ID purchase history (Premium upgrades)</li>
                <li>Transaction logs, payment confirmation IDs</li>
            </ul>

            <h4 className='text-[26px] mt-[26px] font-bold'>3. How We Use Your Data</h4>
            <p className='mt-[10px]'>We use your data for the following purposes:</p>
            <table className="mt-[26px] w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="w-1/2 text-left px-4 py-2 font-semibold text-gray-700">Purpose</th>
                        <th className="w-1/2 text-left px-4 py-2 font-semibold text-gray-700">Legal Basis (GDPR)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="px-4 py-2">To provide the NewTunes app and services</td>
                        <td className="px-4 py-2">Contractual necessity</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">To personalize music recommendations</td>
                        <td className="px-4 py-2">Legitimate interest</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">To improve app features and performance</td>
                        <td className="px-4 py-2">Legitimate interest</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">To send service updates or messages</td>
                        <td className="px-4 py-2">Contractual necessity / Consent</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">To provide customer support</td>
                        <td className="px-4 py-2">Contractual necessity</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">To serve optional advertising (where legal)</td>
                        <td className="px-4 py-2">Consent (EU/UK), Legitimate interest (U.S.)</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">To comply with legal obligations</td>
                        <td className="px-4 py-2">Legal obligation</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">To protect our rights or investigate misuse</td>
                        <td className="px-4 py-2">Legitimate interest / Legal duty</td>
                    </tr>
                </tbody>
            </table>

            <h4 className='text-[26px] mt-[26px] font-bold'>4. Your Privacy Rights</h4>
            <p className='mt-[10px]'>Depending on your location, you have the right to:</p>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Access your personal data</li>
                <li>Correct inaccurate or outdated data</li>
                <li>Delete your account or specific data</li>
                <li>Request portability (a copy in digital format)</li>
                <li>Opt out of personalized ads</li>
                <li>Limit use of sensitive data</li>
                <li>Withdraw consent where applicable</li>
                <li>Appeal a denied request</li>
            </ul>
            <p className='mt-[10px]'>You can exercise these rights by contacting us at:</p>
            <p className='mt-[10px]'>support@newtunesapp.com</p>
            <p className='mt-[10px]'>We may request verification before acting on your request.</p>

            <h4 className='text-[26px] mt-[26px] font-bold'>5. Tailored Content and Advertising</h4>
            <p className='mt-[10px]'>NewTunes uses in-app behavior (likes, dislikes, listening data) to personalize your
                music discovery experience.</p>
            <p className='mt-[10px]'>We do not sell or share this behavioral data with advertisers.</p>
            <p className='mt-[10px]'>For ad-supported accounts:</p>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>IronSource (Unity Ads) may access device-level information only (e.g., device ID, IP, OS
                    version) to serve standard ads.</li>
                <li>We do not give IronSource access to music behavior, profile data, or listening history</li>
            </ul>
            <p className='mt-[10px]'>Users in the EU/UK or similar regions will not see ads unless they explicitly consent, per GDPR 
            and ePrivacy rules. If consent is not granted, ad delivery will not occur. </p>

            <h4 className='text-[26px] mt-[26px] font-bold'>6. Cookies and Tracking</h4>
            <p className='mt-[10px]'>We use limited cookies or SDK-based equivalents for:</p>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Session control and navigation 
                </li>
                <li>Crash logging and security </li>
                <li>User preference persistence </li>
                <li>Non-personal analytics (only if permitted)</li>
            </ul>
            <p className='mt-[10px]'>We do not use cookies or SDKs for cross-app behavioral tracking or retargeting.</p>
            <p className='mt-[10px]'>If you are in a region that requires cookie consent, you will see a notice before non-essential 
            cookies are activated. </p>

            <h4 className='text-[26px] mt-[26px] font-bold'>7. Data Sharing and Disclosure</h4>
            <p className='mt-[10px]'>We do not sell your data. We only share it with trusted third parties who help us operate the 
            platform, subject to appropriate agreements.</p>
            <h5 className="text-[18px] mt-[8px] font-semibold">Who We Share With: </h5>
           <div className=" overflow-auto">
           <table className="mt-[26px] w-full table-auto border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="w-1/3 text-left px-4 py-2 font-semibold text-gray-700">Recipient </th>
                        <th className="w-1/3 text-left px-4 py-2 font-semibold text-gray-700">Purpose</th>
                        <th className="w-1/3 text-left px-4 py-2 font-semibold text-gray-700">Data Shared </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="px-4 py-2">Supabase</td>
                        <td className="px-4 py-2">App infrastructure and 
                        database </td>
                        <td className="px-4 py-2">Account info, usage data</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">IronSource / Unity Ads</td>
                        <td className="px-4 py-2">Ad delivery (device-level data 
                          only) </td>
                        <td className="px-4 py-2">Device ID, OS version, IP 
                        address, not music data </td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">Google Cloud / Squarespace</td>
                        <td className="px-4 py-2">Hosting (website) </td>
                        <td className="px-4 py-2">IP, browser info (collected 
                          passively by Squarespace) </td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">Apple / App Store </td>
                        <td className="px-4 py-2">App distribution and in-app 
                        purchase logs</td>
                        <td className="px-4 py-2">Anonymized usage and crash 
data 
</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">Apple Payments Inc.</td>
                        <td className="px-4 py-2">Payment processing</td>
                        <td className="px-4 py-2">Payment metadata (not card 
                          details)</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">Other users</td>
                        <td className="px-4 py-2">Social interaction (comments, 
                          profiles) </td>
                        <td className="px-4 py-2">Username, profile picture, 
                        public content </td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">Artists and industry reps 
                        (opt-in) </td>
                        <td className="px-4 py-2">Artist discovery and 
                        promotion </td>
                        <td className="px-4 py-2">Artist profiles and published 
                        tracks only</td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">Law enforcement / regulators </td>
                        <td className="px-4 py-2">Legal compliance</td>
                        <td className="px-4 py-2">Any data required by 
                        subpoena or legal process </td>
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2">Business acquirers (if 
                          applicable) </td>
                        <td className="px-4 py-2">In the event of a sale or 
                        merger</td>
                        <td className="px-4 py-2">Transferred under 
confidentiality and legal 
review</td>
                    </tr>
                   
                </tbody>
            </table>
           </div>

            <h4 className='text-[26px] mt-[26px] font-bold'>8. Data Transfers and International Storage</h4>
            <p className='mt-[10px]'> NewTunes operates from the United States but may process data globally. For users in the 
            EEA, UK, or Switzerland, your data may be transferred to the U.S. under: </p>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Standard Contractual Clauses (SCCs) or</li>
                <li>Other lawful mechanisms under GDPR</li>
            </ul>
            <p className='mt-[10px]'> We encrypt all data in transit and at rest, and restrict access to authorized personnel only. </p>

         

            <h4 className='text-[26px] mt-[26px] font-bold'>9. Data Security </h4>
            <p className='mt-[10px]'>We implement strong measures to protect your data, including:</p>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>TLS/SSL encryption</li>
                <li>Access controls and audit logs</li>
                <li>Role-based permissions </li>
                <li>Incident response plans </li>
            </ul>
            <p className='mt-[10px]'> No system is 100% secure. If a data breach occurs, we will notify users and regulators within 
            the legally required timeframe.</p>


            <h4 className='text-[26px] mt-[26px] font-bold'>10. Data Retention</h4>
            <p className='mt-[10px]'>We retain your data only as long as needed for: </p>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Providing the app experience</li>
                <li>Legal or tax compliance</li>
                <li>Defending legal claims</li>
                <li>Improving app features and analytics</li>

            </ul>
            <p className='mt-[10px]'>Some data (e.g. session logs) are automatically deleted after 30 days. Discovery behavior may 
be anonymized after 12 months. You may delete your account at any time, which removes most 
stored data, except where required for legal defense or audit. </p>

<h4 className='text-[26px] mt-[26px] font-bold'>11. Children’s Privacy</h4>
            <p className='mt-[10px]'> NewTunes is not intended for users under 18 years of age. We do not knowingly collect 
personal data from anyone under 18. If you believe a minor is using the platform, please report 
it through the in-app reporting feature. </p>

<h4 className='text-[26px] mt-[26px] font-bold'>12. Changes to This Policy 
</h4>
            <p className='mt-[10px]'>We may update this Privacy Policy from time to time. Any material changes will be 
communicated via app notifications or email. The “Last Updated” date at the top will always 
reflect the latest version.</p>



            <h4 className='text-[26px] mt-[26px] font-bold'>13. Contact Information</h4>
            <p className='mt-[10px]'> For questions, privacy requests, or concerns, contact us at:</p>
            <ul className=' list-disc list-inside flex gap-[10px] flex-col mt-[12px]'>
                <li>Email: support@newtunesapp.com</li>
                <li>Phone: 801-810-5670</li>
                <li>Mail: 8191 Wood Street, Midvale UT 84047</li>
            </ul>
            <p className='mt-[10px]'>NewTunes LLC is the data controller for all personal data collected via our platform.</p>

        </div>
    </section>
  </>;
};

export default PrivacyPolicy;
