import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, User, Phone, MessageSquare } from "lucide-react";
import MaxIcon from "@/components/MaxIcon";

export default function QuickOrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://max.ru/u/f9LHodD0cOIgzB8PPL16ZxpD0Y7ELbSgqEq1YACHDjq1JYxWPcHdNrKm1-I", "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", comment: "" });
    }, 4000);
  };

  return (
    <section id="order" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-electric/5 rounded-full blur-[160px]" />

      <div className="max-w-2xl mx-auto px-5">