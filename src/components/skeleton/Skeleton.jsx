import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonLoa() {
  return (
    <>
      <Card className="group p-3">
        <div>
          <Skeleton className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px]">
            <div
              className="size-full"
            />
          </Skeleton>
          <h4>
            <div
              className="block text-xl mb-3.5"
            >
              <Skeleton className="rounded-lg">
                Lorem ipsum dolor sit amet consectetur
              </Skeleton>
            </div>
          </h4>
          <Skeleton className="rounded-lg line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt alias libero exercitationem perferendis necessitatibus, non eos error aspernatur ea perspiciatis. Ab fugit nihil</Skeleton>
          <div className="flex flex-wrap gap-3 pt-2 items-center justify-between mt-4.5">
            <div className="flex items-center gap-2.5">
              <div
                className="flex items-center gap-3"
              >
                <div className="flex w-6 h-6 rounded-full overflow-hidden *:size-full">
                  <div />
                </div>
                <Skeleton className="text-sm rounded-lg">XXXXXXXXX</Skeleton>
              </div>
              <span className="flex w-[3px] h-[3px] rounded-full"></span>
              <Skeleton className="text-sm rounded-lg">
                XXXXXXXXXXXX
              </Skeleton>
            </div>
            <Skeleton
              className="inline-flex text-sm py-1 px-3 rounded-full"
            >
              XXXXXXXX
            </Skeleton>
          </div>
        </div>
      </Card>
      <Card className="group p-3">
        <div>
          <Skeleton className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px]">
            <div
              className="size-full"
            />
          </Skeleton>
          <h4>
            <div
              className="block text-xl mb-3.5"
            >
              <Skeleton className="rounded-lg">
                Lorem ipsum dolor sit amet consectetur
              </Skeleton>
            </div>
          </h4>
          <Skeleton className="rounded-lg line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt alias libero exercitationem perferendis necessitatibus, non eos error aspernatur ea perspiciatis. Ab fugit nihil</Skeleton>
          <div className="flex flex-wrap gap-3 pt-2 items-center justify-between mt-4.5">
            <div className="flex items-center gap-2.5">
              <div
                className="flex items-center gap-3"
              >
                <div className="flex w-6 h-6 rounded-full overflow-hidden *:size-full">
                  <div />
                </div>
                <Skeleton className="text-sm rounded-lg">XXXXXXXXX</Skeleton>
              </div>
              <span className="flex w-[3px] h-[3px] rounded-full"></span>
              <Skeleton className="text-sm rounded-lg">
                XXXXXXXXXXXX
              </Skeleton>
            </div>
            <Skeleton
              className="inline-flex text-sm py-1 px-3 rounded-full"
            >
              XXXXXXXX
            </Skeleton>
          </div>
        </div>
      </Card>
      <Card className="group p-3">
        <div>
          <Skeleton className="mb-6 overflow-hidden aspect-[1/.6] rounded-[10px]">
            <div
              className="size-full"
            />
          </Skeleton>
          <h4>
            <div
              className="block text-xl mb-3.5"
            >
              <Skeleton className="rounded-lg">
                Lorem ipsum dolor sit amet consectetur
              </Skeleton>
            </div>
          </h4>
          <Skeleton className="rounded-lg line-clamp-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt alias libero exercitationem perferendis necessitatibus, non eos error aspernatur ea perspiciatis. Ab fugit nihil</Skeleton>
          <div className="flex flex-wrap gap-3 pt-2 items-center justify-between mt-4.5">
            <div className="flex items-center gap-2.5">
              <div
                className="flex items-center gap-3"
              >
                <div className="flex w-6 h-6 rounded-full overflow-hidden *:size-full">
                  <div />
                </div>
                <Skeleton className="text-sm rounded-lg">XXXXXXXXX</Skeleton>
              </div>
              <span className="flex w-[3px] h-[3px] rounded-full"></span>
              <Skeleton className="text-sm rounded-lg">
                XXXXXXXXXXXX
              </Skeleton>
            </div>
            <Skeleton
              className="inline-flex text-sm py-1 px-3 rounded-full"
            >
              XXXXXXXX
            </Skeleton>
          </div>
        </div>
      </Card>
    </>
  );
}
