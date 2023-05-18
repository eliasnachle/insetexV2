import Layout from "@/presentation/components/services/layout/layout";
import React from "react";
import { serviceItemMap } from "@/data/services/desentupimento";

export default function desentupimento() {
  return (
    <Layout serviceItemMap={serviceItemMap} />
  );
}
