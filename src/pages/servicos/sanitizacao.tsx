import Layout from "@/presentation/components/services/layout/layout";
import { serviceItemMap } from "@/data/services/sanitizacao";

export default function sanitizacao() {
  return (
    <Layout serviceItemMap={serviceItemMap} />
  );
}
