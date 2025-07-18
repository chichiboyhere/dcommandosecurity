"use client";

import React, { useState } from "react";
import Image from "next/image";
import { teamData } from "@/data/teamData";

import { Modal } from "@/components/ui/Modal";
// Type of TeamData
export type TeamData = {
  name: string;
  title: string;
  image: string;
  bio: string;
};

const ManagementTeam = () => {
  const [selectedMember, setSelectedMember] = useState<TeamData | null>(null);

  return (
    <>
      <section
        id="ourManagement"
        className="px-4 dark:text-[#ffffffcf] bg-white dark:bg-gray-800"
      >
        <h2
          className="text-5xl font-bold text-blue-700 dark:text-white mb-6"
          data-aos="fade-up"
        >
          Management Team
        </h2>
        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {teamData.map((member) => (
            <div
              key={member.name}
              className="cursor-pointer text-center"
              data-aos="fade-up"
              onClick={() => setSelectedMember(member)}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full mx-auto mb-2"
              />
              <p className="font-bold text-black dark:text-[#ffffffcf]">
                {member.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-[#ffffffcf]">
                {member.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Management */}
      {selectedMember && (
        <Modal onClose={() => setSelectedMember(null)}>
          <div className="flex flex-col sm:flex-row gap-6">
            <Image
              src={selectedMember.image}
              alt={selectedMember.name}
              width={350}
              height={350}
              className="rounded-lg self-start"
            />
            <div className="text-black max-h-[300px] overflow-y-auto">
              <h3 className="text-xl font-bold mb-2">{selectedMember.name}</h3>
              <p className="text-sm mb-1 font-semibold text-gray-700 ">
                {selectedMember.title}
              </p>
              <p className="text-sm leading-relaxed">{selectedMember.bio}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ManagementTeam;
