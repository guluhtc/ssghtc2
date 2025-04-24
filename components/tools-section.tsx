"use client";

import { useState } from "react";
import { 
  Search, 
  Filter, 
  MessageSquareText, 
  Hash, 
  Image, 
  Download, 
  BarChart, 
  Sparkles,
  Megaphone
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ToolCard from "@/components/tool-card";
import { motion } from "framer-motion";

// Tool data with gradients
const toolsData = [
  {
    id: 1,
    title: "AI Caption Generator",
    description: "Generate engaging captions for your Instagram posts with AI.",
    icon: MessageSquareText,
    category: "generators",
    popular: true,
    comingSoon: false,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "Hashtag Finder",
    description: "Discover trending hashtags that boost your post's visibility.",
    icon: Hash,
    category: "generators",
    popular: true,
    comingSoon: false,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    title: "Profile Analyzer",
    description: "Get insights and analytics for any Instagram profile.",
    icon: BarChart,
    category: "analyzers",
    popular: false,
    comingSoon: false,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Content Planner",
    description: "Plan and schedule your Instagram content calendar.",
    icon: Image,
    category: "planners",
    popular: false,
    comingSoon: true,
    gradient: "from-orange-500 to-amber-500"
  },
  {
    id: 5,
    title: "Media Downloader",
    description: "Download photos, videos, and stories from Instagram.",
    icon: Download,
    category: "downloaders",
    popular: true,
    comingSoon: false,
    gradient: "from-indigo-500 to-violet-500"
  },
  {
    id: 6,
    title: "Bio Writer",
    description: "Create an attractive and engaging Instagram bio with AI.",
    icon: Megaphone,
    category: "generators",
    popular: false,
    comingSoon: false,
    gradient: "from-rose-500 to-pink-500"
  },
  {
    id: 7,
    title: "Color Palette Generator",
    description: "Generate beautiful color palettes for your Instagram theme.",
    icon: Image,
    category: "generators",
    popular: false,
    comingSoon: false,
    gradient: "from-fuchsia-500 to-purple-500"
  },
  {
    id: 8,
    title: "Engagement Booster",
    description: "AI suggestions to increase engagement on your posts.",
    icon: Sparkles,
    category: "analyzers",
    popular: false,
    comingSoon: true,
    gradient: "from-cyan-500 to-blue-500"
  }
];

const categories = [
  { value: "all", label: "All Tools", gradient: "from-purple-500 to-blue-500" },
  { value: "generators", label: "Generators", gradient: "from-pink-500 to-rose-500" },
  { value: "downloaders", label: "Downloaders", gradient: "from-blue-500 to-cyan-500" },
  { value: "analyzers", label: "Analyzers", gradient: "from-green-500 to-emerald-500" },
  { value: "planners", label: "Planners", gradient: "from-orange-500 to-amber-500" }
];

export default function ToolsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showComingSoon, setShowComingSoon] = useState(false);

  const filteredTools = toolsData.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tool.category === selectedCategory;
    const matchesComingSoon = showComingSoon ? true : !tool.comingSoon;
    
    return matchesSearch && matchesCategory && matchesComingSoon;
  });

  return (
    <section id="tools" className="py-20 tools-gradient">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 gradient-border">
              Tools
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Discover Our <span className="gradient-text">Instagram AI Tools</span>
            </h2>
            <p className="text-muted-foreground max-w-[700px]">
              Browse our collection of free AI-powered tools designed to enhance your Instagram presence.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm border gradient-border">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
              <Input
                type="search"
                placeholder="Search tools..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`transition-all ${
                    selectedCategory === category.value 
                      ? `bg-gradient-to-r ${category.gradient} text-white hover:opacity-90` 
                      : "gradient-border"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ToolCard tool={tool} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <h3 className="text-lg font-medium mb-2">No tools found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Button
            variant="outline"
            onClick={() => setShowComingSoon(!showComingSoon)}
            className="gradient-border"
          >
            {showComingSoon ? "Hide Coming Soon" : "Show Coming Soon"} Tools
          </Button>
        </motion.div>
      </div>
    </section>
  );
}