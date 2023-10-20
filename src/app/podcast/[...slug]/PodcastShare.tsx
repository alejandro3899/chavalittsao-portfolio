import { Podcast } from "@/types/cms";
import Link from "next/link";

export default function PodcastShare({
  share,
}: {
  share: Podcast["share"]["share"][0];
}) {
  const { label, link, platform } = share;

  function getShareIcon(platform: Podcast["share"]["share"][0]["platform"]) {
    switch (platform) {
      case "appleMusic":
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="27"
              rx="3"
              fill="#3D284F"
            />
            <path
              d="M14.0003 23.4508C12.7246 23.4508 11.4871 23.2008 10.3219 22.708C9.19652 22.232 8.18596 21.5507 7.31829 20.6828C6.45062 19.8151 5.76931 18.8046 5.29332 17.6792C4.80029 16.514 4.55029 15.2765 4.55029 14.0008C4.55029 12.7251 4.80029 11.4876 5.29308 10.3224C5.76907 9.19701 6.45038 8.18645 7.31805 7.31878C8.18572 6.45111 9.19652 5.76956 10.3219 5.29357C11.4871 4.80078 12.7246 4.55078 14.0003 4.55078C15.276 4.55078 16.5135 4.80078 17.6787 5.29357C18.8041 5.76956 19.8146 6.45087 20.6823 7.31854C21.55 8.18621 22.2313 9.19701 22.7075 10.3221C23.2003 11.4873 23.4503 12.7251 23.4503 14.0005C23.4503 15.276 23.2003 16.5137 22.7075 17.679C22.2315 18.8043 21.5502 19.8149 20.6823 20.6825C19.8146 21.5502 18.8041 22.2315 17.6787 22.7078C16.5135 23.2005 15.2757 23.4505 14.0003 23.4505V23.4508ZM14.0003 5.19919C11.6492 5.19919 9.43908 6.11465 7.77674 7.77723C6.11441 9.43981 5.1987 11.6497 5.1987 14.0008C5.1987 16.3519 6.11417 18.562 7.77674 20.2243C9.43932 21.8867 11.6494 22.8024 14.0003 22.8024C16.3511 22.8024 18.5615 21.8869 20.2238 20.2243C21.8862 18.5618 22.8019 16.3516 22.8019 14.0008C22.8019 11.6499 21.8864 9.43957 20.2238 7.77723C18.5613 6.11489 16.3514 5.19919 14.0003 5.19919Z"
              fill="white"
            />
            <path
              d="M17.1112 9.17471C17.2873 9.14277 17.4434 9.18264 17.5795 9.29479C17.7157 9.40694 17.7837 9.55103 17.7837 9.72706V15.887C17.7837 16.4554 17.6235 16.8997 17.3034 17.2198C16.9832 17.532 16.5428 17.6881 15.9825 17.6881C15.5983 17.6881 15.282 17.588 15.0339 17.3879C14.7858 17.1797 14.6617 16.9196 14.6617 16.6074C14.6617 16.2153 14.8178 15.887 15.13 15.6228C15.4422 15.3586 15.8464 15.2266 16.3428 15.2266C16.527 15.2266 16.7229 15.2585 16.9311 15.3226C16.9391 15.3226 16.9472 15.3185 16.9551 15.3106C16.9631 15.3106 16.9672 15.3065 16.9672 15.2986V11.3361C16.9672 11.3121 16.9551 11.2921 16.9311 11.276C16.9071 11.252 16.8831 11.2441 16.8591 11.252L12.3562 12.1166C12.2921 12.1327 12.2602 12.1725 12.2602 12.2367V17.0877C12.2602 17.6562 12.1 18.1005 11.7799 18.4206C11.4597 18.7328 11.0193 18.8889 10.459 18.8889C10.0748 18.8889 9.7585 18.7849 9.51042 18.5767C9.26234 18.3766 9.13818 18.1204 9.13818 17.8082C9.13818 17.416 9.29428 17.0877 9.60648 16.8236C9.91868 16.5594 10.3229 16.4273 10.8193 16.4273C11.0034 16.4273 11.1994 16.4593 11.4076 16.5234C11.4155 16.5234 11.4237 16.5193 11.4316 16.5114C11.4396 16.5114 11.4436 16.5073 11.4436 16.4994V10.9278C11.4436 10.7278 11.5037 10.5515 11.6238 10.3995C11.7518 10.2393 11.9119 10.1432 12.1041 10.1113L17.1112 9.17471Z"
              fill="white"
            />
          </svg>
        );
      case "amazon":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.0524 20.9707C18.5962 22.7813 15.0381 23.746 11.9771 23.746C7.67316 23.746 3.81448 22.158 0.887073 19.5126C0.664457 19.3048 0.864812 19.0228 1.13937 19.1823C4.29681 21.0189 8.20744 22.1246 12.2331 22.1246C15.1419 22.1098 18.0174 21.5235 20.6962 20.3956C21.1118 20.2175 21.4605 20.6665 21.0524 20.9707ZM22.0727 19.802C21.7611 19.4013 19.9987 19.6127 19.2084 19.7055C18.9672 19.7352 18.9301 19.5237 19.149 19.3753C20.5589 18.3883 22.8556 18.674 23.1227 19.0043C23.3899 19.3345 23.0522 21.646 21.7351 22.7479C21.531 22.9186 21.3381 22.8258 21.4383 22.6032C21.7351 21.8649 22.3992 20.2064 22.0839 19.8057"
              fill="#3D284F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7226 10.2886C13.7226 11.5427 13.756 12.5927 13.1216 13.7058C12.6021 14.6111 11.7859 15.1713 10.8917 15.1713C9.65616 15.1713 8.92894 14.2289 8.92894 12.8375C8.92894 10.0919 11.3889 9.59106 13.7226 9.59106V10.2886ZM16.9728 18.1432C16.7613 18.3325 16.4534 18.3473 16.2122 18.2212C15.1437 17.3344 14.947 16.9188 14.3645 16.0729C12.5984 17.8761 11.3406 18.4141 9.05138 18.4141C6.33546 18.4141 4.22803 16.7408 4.22803 13.3941C4.22803 10.7783 5.64164 8.99741 7.66374 8.12921C9.41128 7.35747 11.8563 7.2239 13.7226 7.01613V6.608C13.7226 5.84368 13.782 4.93466 13.3293 4.27424C12.9398 3.68059 12.1866 3.43571 11.5224 3.43571C10.2943 3.43571 9.2035 4.06646 8.93636 5.37248C8.88071 5.6693 8.66923 5.94757 8.37611 5.96241L5.24464 5.61364C4.98121 5.55428 4.6881 5.34279 4.76602 4.94579C5.4821 1.14276 8.91039 0 11.9751 0C13.5445 0 15.5926 0.415551 16.8281 1.60284C18.3976 3.0684 18.2454 5.02 18.2454 7.14599V12.1697C18.2454 13.6798 18.8725 14.3402 19.4587 15.1565C19.6628 15.4533 19.7073 15.7946 19.4439 16.0135C18.6128 16.7185 17.7891 17.4309 16.9728 18.1544V18.1469"
              fill="#3D284F"
            />
          </svg>
        );
      case "deezer":
        return (
          <svg
            width="29"
            height="17"
            viewBox="0 0 29 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="14" width="6" height="3" fill="#3D284F" />
            <rect x="8" y="14" width="6" height="3" fill="#3D284F" />
            <rect x="8" y="9.5" width="6" height="3" fill="#3D284F" />
            <rect x="8" y="5" width="6" height="3" fill="#3D284F" />
            <rect x="15.5" y="9.5" width="6" height="3" fill="#3D284F" />
            <rect x="15.5" y="14" width="6" height="3" fill="#3D284F" />
            <rect x="23" y="9.5" width="6" height="3" fill="#3D284F" />
            <rect x="23" y="5" width="6" height="3" fill="#3D284F" />
            <rect x="23" y="0.5" width="6" height="3" fill="#3D284F" />
            <rect x="23" y="14" width="6" height="3" fill="#3D284F" />
          </svg>
        );
      case "spotify":
        return (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 0.5C6.53281 0.5 0.5 6.54969 0.5 14C0.5 21.4503 6.54969 27.5 14 27.5C21.4503 27.5 27.5 21.4503 27.5 14C27.5 6.54969 21.4503 0.5 14 0.5ZM20.1931 19.9822C19.9527 20.3872 19.4338 20.4969 19.033 20.2564C15.8563 18.32 11.8695 17.8855 7.16141 18.9486C6.71 19.0456 6.25859 18.7714 6.16156 18.32C6.06453 17.8686 6.33875 17.4172 6.79016 17.3202C11.937 16.1431 16.3541 16.6409 19.902 18.822C20.3028 19.0625 20.4336 19.5772 20.1931 19.978C20.1931 19.978 20.1931 19.978 20.1931 19.9822ZM21.8384 16.3034C21.5305 16.8055 20.885 16.9489 20.3872 16.6578C16.7591 14.4303 11.2241 13.7848 6.93359 15.0758C6.36828 15.2361 5.79031 14.9323 5.62578 14.3839C5.46547 13.8186 5.76922 13.2406 6.33453 13.0761C11.2367 11.5911 17.3328 12.3041 21.5136 14.8648C21.9988 15.1559 22.1422 15.8014 21.8342 16.2992L21.8384 16.3034ZM21.9819 12.4644C17.6281 9.8825 10.4478 9.64203 6.28813 10.8992C5.62578 11.1102 4.91703 10.722 4.70609 10.0597C4.49516 9.39734 4.88328 8.68859 5.54563 8.47766C10.3212 7.02641 18.2567 7.3175 23.2559 10.2833C23.855 10.6377 24.0448 11.4139 23.6905 12.0088C23.3698 12.6205 22.5767 12.8145 21.9819 12.4602V12.4644Z"
              fill="#3D284F"
            />
          </svg>
        );
      case "youTube":
        return (
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.63395 6.62891C5.41279 6.62891 4.42285 7.61885 4.42285 8.84001V17.6844C4.42285 18.9056 5.4128 19.8955 6.63396 19.8955H19.9006C21.1217 19.8955 22.1117 18.9056 22.1117 17.6844V8.84001C22.1117 7.61885 21.1217 6.62891 19.9006 6.62891H6.63395ZM11.3917 16.3758L15.9208 13.6355C16.0586 13.5522 16.0639 13.3542 15.9308 13.2636L11.4017 10.1807C11.2549 10.0808 11.0562 10.186 11.0562 10.3635V16.1866C11.0562 16.3589 11.2444 16.465 11.3917 16.3758Z"
              fill="#534B6B"
            />
          </svg>
        );
      default:
        return null;
    }
  }

  return (
    <Link href={link} title={label}>
      {getShareIcon(platform)}
    </Link>
  );
}