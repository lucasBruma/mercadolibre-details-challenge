import React from "react";
import {Link, VStack, Text, HStack, Image} from "@chakra-ui/react";

const PaymentMethods = (): JSX.Element => {
  return (
    <VStack alignItems="flex-start" spacing={6} w="100%">
      <Text fontSize="lg">Medios de pago</Text>
      <VStack alignItems="flex-start">
        <Text>Hasta 12 cuotas sin tarjeta</Text>
        <Image src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg" />
      </VStack>
      <VStack alignItems="flex-start">
        <Text>Tarjetas de crédito</Text>
        <HStack spacing={6}>
          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" />
          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" />

          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" />

          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" />
        </HStack>
      </VStack>
      <VStack alignItems="flex-start">
        <Text>Tarjetas de débito</Text>
        <HStack spacing={6}>
          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" />
          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg" />

          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" />

          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg" />
        </HStack>{" "}
      </VStack>
      <VStack alignItems="flex-start">
        <Text>Efectivo</Text>
        <HStack spacing={6}>
          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg" />
          <Image src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg" />
        </HStack>
      </VStack>
      <Link fontSize="sm">Conocé otros medios de pago</Link>
    </VStack>
  );
};

export default PaymentMethods;
