import { FormEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import "./styles.css";
import { Register } from "../lib/endpoint";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setIsSubmitting(false);
    setEmail("");
    closeModal();
  };

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  
  const handleRegister = async () => {

    const user = {
        username,
        password,
        email,
    }

    try {
        const register = await Register(user) 
        if(register._id){
            
        }
    } catch (error) {
        console.log(error)
    }
    
  }

  return (
    <div >
      {/* <button type="button" className="btn" onClick={openModal}>
        Track
      </button> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="dialog-container">
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            />

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="dialog-content">
                <div className="flex flex-col">
                  <div className="flex justify-between" style={{textAlign:"right"}}>
                                    <img
                      src="/assets/icons/x-close.svg"
                      alt="close"
                      width={24}
                      height={24}
                      className="cursor-pointer"
                      onClick={closeModal}
                    />
                  </div>

                  <p style={{fontSize:"large", fontWeight:"600", textAlign:"center"}}>
                   Register
                  </p>
                </div>

                <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
                  <div class="form__group field">
                    <input
                      type="input"
                      class="form__field"
                      placeholder="Name"
                      name="name"
                      id="name"
                      required
                      value = {username}
                      onChange={(e) => setUsername(e.target.value)}

                    />
                    <label for="name" class="form__label">
                      Username
                    </label>
                  </div>

                  <div class="form__group field">
                    <input
                      type="input"
                      class="form__field"
                      placeholder="Name"
                      name="name"
                      id="name"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}

                    />
                    <label for="name" class="form__label">
                      Email
                    </label>
                  </div>

                  <div class="form__group field">
                    <input
                      type="input"
                      class="form__field"
                      placeholder="Name"
                      name="name"
                      id="name"
                      value = {password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label for="name" class="form__label">
                      Password
                    </label>
                  </div>

                  <button onClick={handleRegister} type="submit" className="dialog-btn">
                    {isSubmitting ? "Registering..." : "Register"}
                  </button>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
