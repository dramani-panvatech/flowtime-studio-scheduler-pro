
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Calendar, Users, CreditCard, Bell, RefreshCw, Settings, BarChart, Palette, Smartphone, Shield, Video, Clock, Star, Zap, Heart, Globe } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Effortlessly manage class schedules with recurring sessions, buffer times, and intelligent conflict detection.",
    category: "Scheduling"
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Comprehensive client profiles with intake forms, attendance tracking, and personalized communications.",
    category: "Client Care"
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Seamless payments with Stripe and PayPal integration, package deals, and automated billing.",
    category: "Payments"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated SMS and email reminders for bookings, cancellations, and class updates.",
    category: "Communication"
  },
  {
    icon: RefreshCw,
    title: "Calendar Sync",
    description: "Two-way synchronization with Google Calendar, Outlook, and other popular calendar apps.",
    category: "Integration"
  },
  {
    icon: Video,
    title: "Virtual Classes",
    description: "Built-in Zoom integration for seamless online yoga and pilates sessions.",
    category: "Virtual"
  },
  {
    icon: BarChart,
    title: "Analytics & Reports",
    description: "Detailed insights into class popularity, revenue trends, and client engagement metrics.",
    category: "Analytics"
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "White-label booking widgets with your custom domain, colors, and branding elements.",
    category: "Branding"
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS and Android apps for both clients and instructors with offline capabilities.",
    category: "Mobile"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "GDPR compliant with PCI-DSS payment security and encrypted data storage.",
    category: "Security"
  },
  {
    icon: Clock,
    title: "Waitlist Management",
    description: "Intelligent waitlists that automatically fill spots from cancellations and no-shows.",
    category: "Scheduling"
  },
  {
    icon: Star,
    title: "Review System",
    description: "Built-in rating and review system to gather feedback and improve your services.",
    category: "Feedback"
  },
  {
    icon: Zap,
    title: "Automation Hub",
    description: "Custom workflows and triggers to automate routine tasks and save time.",
    category: "Automation"
  },
  {
    icon: Heart,
    title: "Wellness Tracking",
    description: "Help clients track their wellness journey with progress monitoring and goal setting.",
    category: "Wellness"
  },
  {
    icon: Globe,
    title: "Multi-Location",
    description: "Manage multiple studio locations from a single dashboard with centralized reporting.",
    category: "Management"
  },
  {
    icon: Settings,
    title: "API & Integrations",
    description: "Connect with 3000+ apps through Zapier, webhooks, and our robust REST API.",
    category: "Integration"
  }
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (featuresRef.current) {
      // Animate feature cards on page load
      anime({
        targets: '.feature-card',
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(100, {start: 300}),
        duration: 800,
        easing: 'easeOutCubic'
      });

      // Animate header elements
      anime({
        targets: '.hero-element',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: anime.stagger(200),
        duration: 600,
        easing: 'easeOutCubic'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 font-cabinet">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="hero-element text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
              Modern Studios
            </span>
          </h1>
          <p className="hero-element text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to run a successful yoga and pilates studio, 
            designed with wellness professionals in mind.
          </p>
        </div>
      </div>

      {/* Features List */}
      <div className="pb-20 px-4" ref={featuresRef}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="feature-card bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-purple-200 opacity-0"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {feature.title}
                        </h3>
                        <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full">
                          {feature.category}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="hero-element bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 py-16 px-4 opacity-0">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Studio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of wellness professionals who have simplified their operations with FlowTime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

