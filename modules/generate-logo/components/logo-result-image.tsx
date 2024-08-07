import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@/components/ui/animated-modal";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LogoResultModalProps {
  open: boolean;
  imageUrl: string;
  companyName: string;
}

export function LogoResultModal({
  open,
  imageUrl,
  companyName,
}: LogoResultModalProps) {
  const saveFile = () => {
    saveAs(imageUrl, `${companyName}.jpg`);
  };
  const pathname = usePathname();

  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalBody externalOpen={open}>
          <ModalContent>
            <div className="flex justify-center w-full">
              <Image src={imageUrl} alt={imageUrl} width={512} height={512} />
            </div>
          </ModalContent>
          <ModalFooter className="space-x-2">
            <Link href={`/generate-soundtrack?from=${pathname}`}>
              <Button>Generate SoundTrack</Button>
            </Link>
            <Button className="hover:scale-105" onClick={saveFile}>
              Download
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
