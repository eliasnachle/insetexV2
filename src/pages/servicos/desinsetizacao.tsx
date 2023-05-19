import Layout from "@/presentation/components/services/layout/layout";
import { serviceItemMap } from "@/data/services/desinsetizacao";

export default function desinsetizacao() {
  return (
    <Layout serviceItemMap={serviceItemMap} />
  );
}
