import {
  Linkedin,
  Mail,
  MapPin,
  PhoneCallIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-gray-800 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-teal-200/65 via-cyan-300/65 to-blue-400/65 backdrop-blur-sm border border-slate-700 mb-2">
              <span className="relative z-10 text-gray-100">
                {t("ashish_portfolio_contact_subtitle")}
              </span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-cyan-500/20 to-blue-600/20 animate-pulse"></span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t("ashish_portfolio_contact_title")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Contact Information Card */}
        <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700/50 rounded-xl p-6 sm:p-8 shadow-xl mt-10 max-w-xl w-full mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            {t("ashish_portfolio_contact_info_title")}
          </h3>
          <ul className="space-y-5 mb-8">
            {/* Email */}
            <li className="flex items-start gap-4">
              <Mail className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-zinc-400">
                  {t("ashish_portfolio_contact_email_label")}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-teal-300 transition-colors break-all"
                  href={`mailto:${t("ashish_portfolio_contact_email_address")}`}
                >
                  {t("ashish_portfolio_contact_email_address")}
                </a>
              </div>
            </li>
            {/* LinkedIn */}
            <li className="flex items-start gap-4">
              <Linkedin className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-zinc-400">
                  {t("ashish_portfolio_contact_linkedin_label")}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-teal-300 transition-colors break-all"
                  href={t("ashish_portfolio_contact_linkedin_url")}
                >
                  {t("ashish_portfolio_contact_linkedin_url")}
                </a>
              </div>
            </li>
            {/* Phone */}
            <li className="flex items-start gap-4">
              <PhoneCallIcon className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-zinc-400">
                  {t("ashish_portfolio_contact_mobile_label")}
                </p>
                <a
                  href={`tel:${t("ashish_portfolio_contact_mobile_number")}`}
                  className="text-zinc-200 hover:text-teal-300 transition-colors"
                >
                  {t("ashish_portfolio_contact_mobile_number")}
                </a>
              </div>
            </li>
            {/* Address */}
            <li className="flex items-start gap-4">
              <MapPin className="text-teal-400 w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-zinc-400">
                  {t("ashish_portfolio_contact_address_label")}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-200 hover:text-teal-300 transition-colors"
                  href="https://www.google.com/maps/place/Hyderabad,+Telangana"
                >
                  {t("ashish_portfolio_contact_address_value")}
                </a>
              </div>
            </li>
          </ul>
          {/* Availability Status */}
          <div className="border-t border-zinc-700/50 pt-6">
            <h4 className="text-lg font-medium text-white mb-3 text-center">
              {t("ashish_portfolio_contact_status_title")}
            </h4>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-sm text-zinc-300 text-center">
                {t("ashish_portfolio_contact_status_value")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;