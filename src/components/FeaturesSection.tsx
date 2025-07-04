
import React, { useState } from 'react';
import { Calendar, Users, CreditCard, Bell, Sync, Shield, BarChart, Palette, Smartphone, Settings } from 'lucide-react';

const features = [
  {
    id: 'scheduling',
    icon: Calendar,
    title: 'Class Scheduling',
    description: 'Recurring sessions, buffer times, waitlists, Zoom integration',
    details: [
      'Automated recurring class setup',
      'Customizable buffer times between sessions',
      'Smart waitlist management',
      'Seamless Zoom integration for virtual classes',
      'Multi-instructor scheduling'
    ]
  },
  {
    id: 'clients',
    icon: Users,
    title: 'Client Management',
    description: 'Intake forms, multilingual profiles, attendance history',
    details: [
      'Custom intake forms and waivers',
      'Multilingual client profiles',
      'Detailed attendance tracking',
      'Client communication tools',
      'Membership management'
    ]
  },
  {
    id: 'payments',
    icon: CreditCard,
    title: 'Payments & Packages',
    description: 'Stripe, PayPal, packages, discounts, per-user pricing',
    details: [
      'Integrated Stripe and PayPal payments',
      'Flexible package and bundle options',
      'Automated discount management',
      'Per-user pricing models',
      'Revenue tracking and reporting'
    ]
  },
  {
    id: 'notifications',
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Automated SMS/email, customizable reminders',
    details: [
      'Automated booking confirmations',
      'Customizable reminder schedules',
      'SMS and email notifications',
      'Class change alerts',
      'Marketing campaign tools'
    ]
  },
  {
    id: 'calendar',
    icon: Sync,
    title: 'Calendar Integration',
    description: 'Sync with Google, Outlook, iCal, Zapier support',
    details: [
      'Two-way Google Calendar sync',
      'Outlook and iCal integration',
      'Zapier automation support',
      'Multi-timezone support',
      'Calendar embedding options'
    ]
  },
  {
    id: 'staff',
    icon: Settings,
    title: 'Staff & Resources',
    description: 'Instructor scheduling, permissions, role control',
    details: [
      'Instructor availability management',
      'Role-based permissions',
      'Resource booking system',
      'Staff communication tools',
      'Performance tracking'
    ]
  },
  {
    id: 'analytics',
    icon: BarChart,
    title: 'Analytics & Reports',
    description: 'Exportable attendance, revenue reports, schedule summaries',
    details: [
      'Real-time attendance tracking',
      'Revenue and financial reports',
      'Class popularity analytics',
      'Custom report builder',
      'Data export capabilities'
    ]
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Custom Branding',
    description: 'Embeddable calendars, custom CSS, domain branding',
    details: [
      'White-label booking widgets',
      'Custom CSS styling',
      'Your domain branding',
      'Logo and color customization',
      'Mobile app branding'
    ]
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Security & Compliance',
    description: 'GDPR, PCI-DSS, role-based access, uptime',
    details: [
      'GDPR compliant data handling',
      'PCI-DSS payment security',
      'Role-based access control',
      '99.9% uptime guarantee',
      'Regular security audits'
    ]
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Mobile Access',
    description: 'iOS/Android apps, mobile web optimization',
    details: [
      'Native iOS and Android apps',
      'Responsive mobile web design',
      'Offline booking capabilities',
      'Push notifications',
      'Mobile payment processing'
    ]
  }
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState('scheduling');
  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="py-24 px-4 bg-white" id="features">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Run Your Studio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools designed specifically for yoga and pilates professionals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feature Navigation */}
          <div className="lg:col-span-1 space-y-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                    activeFeature === feature.id
                      ? 'bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-200 shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <Icon className={`h-6 w-6 mt-1 ${
                      activeFeature === feature.id ? 'text-purple-600' : 'text-gray-500'
                    }`} />
                    <div>
                      <h3 className={`font-semibold mb-1 ${
                        activeFeature === feature.id ? 'text-purple-800' : 'text-gray-800'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feature Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-purple-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
                  <currentFeature.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{currentFeature.title}</h3>
                  <p className="text-gray-600">{currentFeature.description}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {currentFeature.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
