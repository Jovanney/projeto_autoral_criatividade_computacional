"use client";

import AutoForm from "@/components/ui/auto-form";
import {
  AutoFormInputComponentProps,
  DependencyType,
} from "@/components/ui/auto-form/types";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { z } from "zod";
import { useCompanyStore } from "@/modules/generate-logo/stores";
import MultipleSelectWithImages from "@/modules/generate-logo/components/multiple-select-with-image";
import OtherImage from "@/public/otherOption.webp";
import Professional from "@/public/professional.webp";
import Innovative from "@/public/innovative.webp";
import Trustworthy from "@/public/trustworthy.webp";
import Fun from "@/public/fun.webp";
import Elegant from "@/public/elegant.webp";
import Adventurous from "@/public/adventurous.webp";
import Friendly from "@/public/friendly.webp";
import Sustentable from "@/public/sustentable.webp";

interface CompanyFormProps {
  setContinue: React.Dispatch<React.SetStateAction<boolean>>;
}

export function BrandAttributeForm({ setContinue }: CompanyFormProps) {
  const {
    brandAttributes,
    setBrandAttributes,
    brandAttributesOther,
    setBrandAttributesOther,
  } = useCompanyStore((state) => {
    return {
      brandAttributes: state.Attributes,
      setBrandAttributes: state.setAttributes,
      brandAttributesOther: state.AttributesOther,
      setBrandAttributesOther: state.setAttributesOther,
    };
  });

  const BrandAttributeSchema = z.object({
    brandAttributes: z.array(z.string()).default(brandAttributes),
    brandAttributesOther: z.string().optional().default(brandAttributesOther),
  });

  return (
    <AutoForm
      values={{ brandAttributes: brandAttributes }}
      fieldConfig={{
        brandAttributes: {
          fieldType: ({
            field,
            label,
            isRequired,
            fieldConfigItem,
          }: AutoFormInputComponentProps) => (
            <FormItem
              id="brand-attributes"
              className="flex gap-2 flex-col items-center space-x-3 space-y-0 rounded-md p-4 w-full"
            >
              <FormLabel htmlFor="brand-attributes">
                <span className="text-2xl text-center">{label}</span>
                {isRequired && (
                  <span className="text-destructive dark:text-red-500"> *</span>
                )}
              </FormLabel>
              <FormControl>
                <MultipleSelectWithImages
                  options={[
                    {
                      value: "Professional",
                      image: Professional.src,
                    },
                    {
                      value: "Innovative",
                      image: Innovative.src,
                    },
                    {
                      value: "Trustworthy",
                      image: Trustworthy.src,
                    },
                    {
                      value: "Fun",
                      image: Fun.src,
                    },
                    {
                      value: "Elegant",
                      image: Elegant.src,
                    },
                    {
                      value: "Adventurous",
                      image: Adventurous.src,
                    },
                    {
                      value: "Friendly",
                      image: Friendly.src,
                    },
                    {
                      value: "Sustentable",
                      image: Sustentable.src,
                    },
                    {
                      value: "Other",
                      image: OtherImage.src,
                    },
                  ]}
                  values={field.value}
                  onChange={setBrandAttributes}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                {fieldConfigItem.description && (
                  <FormDescription>
                    {fieldConfigItem.description}
                  </FormDescription>
                )}
              </div>
              <FormMessage />
            </FormItem>
          ),
        },
      }}
      dependencies={[
        {
          sourceField: "brandAttributes",
          targetField: "brandAttributesOther",
          type: DependencyType.HIDES,
          when: (value) => !brandAttributes.includes("Other"),
        },

        {
          sourceField: "brandAttributes",
          targetField: "brandAttributesOther",
          type: DependencyType.REQUIRES,
          when: (value) => value === "Other",
        },
      ]}
      onSubmit={(value) => {
        if (!value.brandAttributes) {
          setContinue(false);
        } else {
          if (brandAttributes.includes("Other") && value.brandAttributesOther) {
            setBrandAttributesOther(value.brandAttributesOther);
          }
          setContinue(true);
        }
      }}
      formSchema={BrandAttributeSchema}
    />
  );
}
