import Layout from "@/presentation/components/services/layout/layout";
import { serviceItemMap } from "@/data/services/limpeza";

export default function limpezaDeCaixasDAgua() {
  return (
    <Layout serviceItemMap={serviceItemMap} />
  );
}
