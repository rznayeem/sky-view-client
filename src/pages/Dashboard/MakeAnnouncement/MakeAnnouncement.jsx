import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MakeAnnouncement = () => {
  const axiosSecure = useAxiosSecure();

  const handleAnnouncement = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const announcementData = {
      title,
      description,
      date: new Date(),
    };
    axiosSecure.post('/announcement', announcementData).then(res => {
      if (res.data.acknowledged) {
        Swal.fire({
          position: 'Center',
          icon: 'success',
          title: 'New announcement successfully published!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="container px-5 py-24 mx-auto flex">
      <form
        onSubmit={handleAnnouncement}
        className="lg:w-1/3 md:w-1/2 mx-auto bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative shadow-md"
      >
        <h2 className="text-gray-900 text-center text-lg mb-1 font-medium title-font">
          Make Announcement
        </h2>
        <div className="relative mb-4">
          <label className="leading-7 text-gray-600">Title</label>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full bg-white rounded border border-gray-300 focus:border-[#405189] focus:ring-1 focus:ring-[#405189] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <label className="form-control mb-4">
          <div className="label">
            <span className="">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Description"
            name="description"
          ></textarea>
        </label>
        <button className="text-white bg-[#405189] border-0 py-2 px-6 focus:outline-none hover:bg-[#3d62df] rounded text-lg">
          Button
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
