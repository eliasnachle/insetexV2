import Layout from "@/presentation/components/services/layout/layout";
import { serviceItemMap } from "@/data/services/desratizacao";

export default function desratizacao() {
  return (
    <Layout serviceItemMap={serviceItemMap} />
  );
}
