/**
 * By importing and exporting these modules here,
 * Jest will be able to spyOn/mock them for testing
 */
import { useRouter } from "next/navigation";
import { useId, useState } from "react";

const Context = {
  useRouter,
  useId,
  useState,
};

export default Context;
