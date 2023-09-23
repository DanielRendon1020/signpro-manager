import Image from "next/image";

export default function Features() {
  return (
    <>
      <section className="flex justify-center my-10">
        <Image
          src={"/visualize_status.png"}
          alt="visualize status"
          width={600}
          height={295}
          className="m-5 shadow-xl shadow-orange-400 rounded-lg"
        />
        <div className="my-auto">
          <h3 className="p-5 ms-8 font-bold">Visualize Status</h3>
          <p className="max-w-2xl p-5 m-2">
            Gain real-time insights into your sign fabrication projects with our Visualize Status feature. Track progress, identify bottlenecks, and monitor task completion at a glance. Streamline decision-making and keep your projects on the right track with visual project status updates.
          </p>
        </div>
      </section>
      <section className="flex flex-row-reverse justify-center my-10">
        <Image
          src={"/update_clients.png"}
          alt="update clients"
          width={600}
          height={295}
          className="m-5 shadow-xl shadow-orange-400 rounded-lg"
        />
        <div className="my-auto text-right">
          <h3 className="p-5 me-8 font-bold">Update Clients</h3>
          <p className="max-w-2xl p-5 m-2">
            Gain real-time insights into your sign fabrication projects with our Visualize Status feature. Track progress, identify bottlenecks, and monitor task completion at a glance. Streamline decision-making and keep your projects on the right track with visual project status updates.
          </p>
        </div>
      </section>
      <section className="flex justify-center my-10">
        <Image
          src={"/fabrication_control.png"}
          alt="fabrication control"
          width={600}
          height={295}
          className="m-5 shadow-xl shadow-orange-400 rounded-lg"
        />
        <div className="my-auto">
          <h3 className="p-5 ms-8 font-bold">Fabrication Control</h3>
          <p className="max-w-2xl p-5 m-2">
            Take full control of your sign fabrication process with our Fabrication Control feature. Manage resources, allocate tasks, and oversee every aspect of production from a centralized platform. Enhance efficiency, minimize errors, and deliver high-quality signage on schedule with Fabrication Control.
          </p>
        </div>
      </section>
    </>
  );
}
