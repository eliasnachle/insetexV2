import Layout from "@/presentation/components/services/layout/layout";
import React from "react";
import { serviceItemMap } from "@/data/services/limpeza";

export default function limpezaDeCaixasDAgua() {
  return (
    <Layout serviceItemMap={serviceItemMap} />
  );
}
