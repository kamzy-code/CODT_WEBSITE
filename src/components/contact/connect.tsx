"use client";
import { motion } from "framer-motion";
import { FaTiktok, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const social = [
  {
    title: "Bishop Joel Njoku",
    fb: [
      {
        username: "Bishop Joel Njoku",
        url: "https://www.facebook.com/share/1D14dY5w2o/",
      },
      {
        username: "Bishop Joel Andrew",
        url: "https://web.facebook.com/BishopNjokuJoel",
      },
    ],
    ig: {
      username: "Bishop Joel Njoku",
      url: "https://www.instagram.com/bishopjoelnjoku?igsh=Y244NHZtZXdqOGpm",
    },
    youtube: {
      username: "Bishop Joel Njoku",
      url: "https://youtube.com/@bishopjoelandrew?si=vVl8gilAuajPJzWU",
    },
  },

  {
    title: "Victory Chapel",
    fb: [
      {
        username: "Victory Chapel",
        url: "https://www.facebook.com/share/17XL1mMWt6/",
      },
    ],
    ig: {
      username: "Victory Chapel",
      url: "https://www.instagram.com/cityofdavidtabernacle?igsh=MTk2NW9rZng5dzBq",
    },
    youtube: {
      username: "Victory Chapel",
      url: "https://www.youtube.com/@victorychapelmd_cod",
    },
  },

  {
    title: "Restoration Chapel",
    fb: [
      {
        username: "Restoration Chapel",
        url: "https://www.facebook.com/share/1CnefnRZEy/",
      },
    ],
    tiktok: {
      username: "Restoration Chapel",
      url: "https://www.tiktok.com/@cityofdavidtabernacle?_r=1&_d=edc962904ebf2m&sec_uid=MS4wLjABAAAAy_qQIcHAFCk7Yh_v7B16_QMJIrLQeGhZ0WF9yJ2LblNyuALsqWBmNjE6Yw7mZYHy&share_author_id=7483171134293607430&sharer_language=en&source=h5_m&u_code=ejai5i3hfhlbi8&timestamp=1762434878&user_id=7483171134293607430&sec_user_id=MS4wLjABAAAAy_qQIcHAFCk7Yh_v7B16_QMJIrLQeGhZ0WF9yJ2LblNyuALsqWBmNjE6Yw7mZYHy&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7534814119968851726&share_link_id=486c458e-0fdc-40a0-9182-a37cb2e3d071&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1",
    },
  },
];
export function Connect() {
  return (
    <section className="flex items-center justify-center section-padding bg-primary-200">
      <div className="container-max space-y-8">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-16">
          {social.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * idx }}
                className="space-y-4"
              >
                <h3 className="font-bold text-primary-900 text-lg">
                  {`Connect with ${item.title}`}
                </h3>

                <div className="space-y-6">
                  {item.fb &&
                    item.fb.map((fb, fb_idx) => {
                      return (
                        <div
                          className="text-sm text-dark flex items-center justify-between gap-6"
                          key={fb_idx}
                        >
                          <FaFacebook className="shrink-0 w-6 h-6 text-primary-900" />

                          <p className="max-w-xs"> {fb.username}</p>

                          <Link href={fb.url} target={"_blank"}>
                            <button className="btn-secondary border-dark text-dark h-8 rounded-sm hover:bg-primary-900 hover:text-white active:bg-primary-900 active:text-white">
                              Follow
                            </button>
                          </Link>
                        </div>
                      );
                    })}

                  {item.ig && (
                    <div className="text-sm text-dark flex items-center justify-between gap-6">
                      <FaInstagram className="shrink-0 w-6 h-6 text-primary-900" />

                      <p className="max-w-xs"> {item.ig.username}</p>

                      <Link href={item.ig.url} target={"_blank"}>
                        <button className="btn-secondary border-dark text-dark h-8 rounded-sm hover:bg-primary-900 hover:text-white active:bg-primary-900 active:text-white">
                          Follow
                        </button>
                      </Link>
                    </div>
                  )}

                  {item.youtube && (
                    <div className="text-sm text-dark flex items-center justify-between gap-6">
                      <FaYoutube className="shrink-0 w-6 h-6 text-primary-900" />

                      <p className="max-w-xs"> {item.youtube.username}</p>

                      <Link href={item.youtube.url} target={"_blank"}>
                        <button className="btn-secondary border-dark text-dark h-8 rounded-sm hover:bg-primary-900 hover:text-white active:bg-primary-900 active:text-white">
                          Follow
                        </button>
                      </Link>
                    </div>
                  )}

                  {item.tiktok && (
                    <div className="text-sm text-dark flex items-center justify-between gap-6">
                      <FaTiktok className="shrink-0 w-6 h-6 text-primary-900" />

                      <p className="max-w-xs"> {item.tiktok.username}</p>

                      <Link href={item.tiktok.url} target={"_blank"}>
                        <button className="btn-secondary border-dark text-dark h-8 rounded-sm hover:bg-primary-900 hover:text-white active:bg-primary-900 active:text-white">
                          Follow
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
