import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

const allMenuList = [
  {
    menuTitle: "Start",
    menuIcon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.9949 2.43418C22.2569 2.49673 21.5227 2.58357 20.793 2.70866C19.2303 2.97707 17.7294 3.43312 16.3006 4.08957C15.1825 4.60331 14.1664 5.27251 13.2115 6.0249C12.6222 6.48945 12.0475 6.9704 11.5193 7.49811C10.3036 8.71141 9.24347 10.0352 8.39386 11.5084C8.3052 11.6621 8.33007 11.7677 8.45828 11.888C9.03809 12.4309 9.61024 12.981 10.1856 13.5282C12.367 15.605 14.5491 17.6824 16.7305 19.7593C16.9844 20.001 16.9825 19.9925 17.2976 19.8273C18.5184 19.1878 19.6462 18.4197 20.6846 17.5403C22.3028 16.1698 23.701 14.6231 24.7381 12.7989C25.7414 11.0342 26.3072 9.14014 26.5879 7.16047C26.6446 6.76211 26.6893 6.36314 26.7276 5.96357C26.7339 5.89738 26.7052 5.79961 26.8309 5.79536C26.8309 5.73463 26.8309 5.67391 26.8309 5.61318C26.7735 5.60164 26.7843 5.56156 26.7907 5.52391C26.783 5.48444 26.7837 5.44861 26.8309 5.431C26.8309 5.37028 26.8309 5.30955 26.8309 5.24882C26.7543 5.12737 26.7588 5.00592 26.8309 4.88447C26.8309 4.64157 26.8309 4.39866 26.8309 4.15576C26.7575 4.04949 26.7537 3.94322 26.8309 3.83695C26.8309 3.70032 26.8309 3.56368 26.8309 3.42705C26.7505 3.3311 26.7697 3.20419 26.7161 3.09852C26.5094 2.69166 26.1956 2.42264 25.7057 2.3771C25.6726 2.37406 25.6445 2.36981 25.6349 2.33398C25.4755 2.33398 25.316 2.33398 25.1565 2.33398C24.9971 2.40625 24.8376 2.40443 24.6781 2.33398C24.4868 2.33398 24.2954 2.33398 24.1041 2.33398C24.0084 2.40078 23.9127 2.40503 23.817 2.33398C23.7373 2.33398 23.6576 2.33398 23.5779 2.33398C23.53 2.38985 23.4822 2.40382 23.4343 2.33398C23.3546 2.33398 23.2749 2.33398 23.1951 2.33398C23.1798 2.46029 23.0708 2.4275 22.9949 2.43418ZM19.1161 13.0855C17.1324 13.0861 15.5378 11.5698 15.5371 9.68242C15.5359 7.79324 17.1311 6.27205 19.1129 6.27205C21.0966 6.27205 22.697 7.79202 22.6989 9.67817C22.7015 11.5601 21.0979 13.0849 19.1161 13.0855Z"
          fill="white"
        />
        <path
          d="M23.1003 2.38051C22.4083 2.41512 21.7219 2.50014 21.0388 2.61066C19.3466 2.88453 17.7054 3.33208 16.1848 4.09358C12.7449 5.81577 10.1628 8.36989 8.28757 11.5932C8.21804 11.7129 8.24866 11.7705 8.33987 11.8568C11.1726 14.5487 14.0027 17.2432 16.8303 19.94C16.9215 20.0268 16.9808 20.0542 17.1071 19.988C20.1267 18.417 22.5716 16.2564 24.3926 13.4788C25.8042 11.326 26.4752 8.93586 26.7393 6.4291C26.7616 6.21838 26.7303 5.99734 26.8311 5.79573C26.7048 5.79998 26.7342 5.89775 26.7278 5.96394C26.6895 6.36412 26.6449 6.76309 26.5881 7.16084C26.3074 9.14051 25.7417 11.0345 24.7383 12.7992C23.7012 14.6234 22.3037 16.1701 20.6848 17.5407C19.6457 18.4206 18.5187 19.1882 17.2978 19.8276C16.9827 19.9928 16.9853 20.0013 16.7308 19.7596C14.5487 17.6828 12.3672 15.6054 10.1858 13.5286C9.61046 12.9808 9.03831 12.4312 8.45851 11.8884C8.3303 11.7681 8.30543 11.6624 8.39409 11.5088C9.24306 10.0356 10.3038 8.71178 11.5195 7.49848C12.0477 6.97077 12.6224 6.48982 13.2118 6.02527C14.1666 5.27288 15.1827 4.60307 16.3009 4.08994C17.7296 3.43349 19.2305 2.97744 20.7932 2.70903C21.5223 2.58394 22.2571 2.4971 22.9951 2.43455C23.0716 2.42787 23.1801 2.46066 23.1954 2.33496C23.182 2.38415 23.1392 2.37868 23.1003 2.38051Z"
          fill="white"
        />
        <path
          d="M26.8307 3.42801C26.8307 3.09766 26.8269 2.7667 26.8333 2.43636C26.8346 2.35073 26.8122 2.3313 26.7242 2.33312C26.3613 2.33859 25.9983 2.33555 25.6348 2.33555C25.9212 2.35498 26.1871 2.42178 26.4117 2.607C26.6757 2.82439 26.8001 3.10373 26.8307 3.42801Z"
          fill="white"
        />
        <path
          d="M25.7056 2.37808C26.1954 2.42423 26.5086 2.69264 26.7159 3.0995C26.7695 3.20516 26.7504 3.33208 26.8307 3.42803C26.8001 3.10375 26.6764 2.82502 26.4117 2.60641C26.1871 2.42119 25.9212 2.35439 25.6348 2.33496C25.6443 2.37079 25.6724 2.37504 25.7056 2.37808Z"
          fill="white"
        />
        <path
          d="M25.1571 2.33496C24.9976 2.33496 24.8382 2.33496 24.6787 2.33496C24.8382 2.37363 24.9976 2.37363 25.1571 2.33496Z"
          fill="white"
        />
        <path
          d="M25.1571 2.33496C24.9976 2.37424 24.8382 2.37424 24.6787 2.33496C24.8382 2.40616 24.9976 2.40739 25.1571 2.33496Z"
          fill="white"
        />
        <path
          d="M26.8309 5.2501C26.8309 5.12865 26.8309 5.00719 26.8309 4.88574C26.7907 5.00719 26.7907 5.12865 26.8309 5.2501Z"
          fill="white"
        />
        <path
          d="M26.8311 5.2501C26.791 5.12865 26.791 5.00719 26.8311 4.88574C26.7591 5.00719 26.7546 5.12865 26.8311 5.2501Z"
          fill="white"
        />
        <path
          d="M26.8304 4.1567C26.8304 4.05043 26.8304 3.94416 26.8304 3.83789C26.7909 3.94416 26.7909 4.05043 26.8304 4.1567Z"
          fill="white"
        />
        <path
          d="M26.8309 4.1567C26.7913 4.05043 26.7913 3.94416 26.8309 3.83789C26.7537 3.94416 26.7575 4.05043 26.8309 4.1567Z"
          fill="white"
        />
        <path
          d="M24.1044 2.33496C24.0087 2.33496 23.9131 2.33496 23.8174 2.33496C23.9131 2.3724 24.0087 2.3724 24.1044 2.33496Z"
          fill="white"
        />
        <path
          d="M24.1044 2.33496C24.0087 2.3724 23.9131 2.3724 23.8174 2.33496C23.9131 2.40677 24.0087 2.40248 24.1044 2.33496Z"
          fill="white"
        />
        <path
          d="M23.5781 2.33496C23.5302 2.33496 23.4824 2.33496 23.4346 2.33496C23.4824 2.36933 23.5302 2.36933 23.5781 2.33496Z"
          fill="white"
        />
        <path
          d="M23.5781 2.33496C23.5302 2.36933 23.4824 2.36933 23.4346 2.33496C23.4824 2.40554 23.5302 2.39143 23.5781 2.33496Z"
          fill="white"
        />
        <path
          d="M26.8057 5.52394C26.814 5.52334 26.8222 5.52334 26.8305 5.52273C26.8305 5.49237 26.8305 5.462 26.8305 5.43164C26.8012 5.45654 26.8069 5.49054 26.8057 5.52273C26.8057 5.52334 26.8057 5.52334 26.8057 5.52394Z"
          fill="white"
        />
        <path
          d="M26.7908 5.52455C26.7959 5.52455 26.801 5.52394 26.8068 5.52394C26.8068 5.52334 26.8068 5.52334 26.8068 5.52273C26.8081 5.49054 26.8017 5.45654 26.8317 5.43164C26.7832 5.44925 26.7832 5.48508 26.7908 5.52455Z"
          fill="white"
        />
        <path
          d="M26.8057 5.53643C26.8057 5.56436 26.805 5.5923 26.8305 5.61355C26.8305 5.58319 26.8305 5.55282 26.8305 5.52246C26.8229 5.53521 26.8146 5.53946 26.8057 5.53643Z"
          fill="white"
        />
        <path
          d="M26.7906 5.52539C26.7849 5.56304 26.7734 5.60312 26.8308 5.61466C26.8053 5.5928 26.8059 5.56486 26.8059 5.53754C26.8008 5.53571 26.7957 5.53268 26.7906 5.52539Z"
          fill="white"
        />
        <path
          d="M26.8057 5.5377C26.8143 5.54035 26.8229 5.53571 26.8315 5.52246C26.8229 5.52312 26.8143 5.52312 26.8057 5.52379C26.8057 5.52909 26.8057 5.53372 26.8057 5.5377Z"
          fill="white"
        />
        <path
          d="M26.808 5.53891C26.808 5.53375 26.808 5.52859 26.808 5.52344C26.8021 5.52344 26.7962 5.52417 26.7896 5.52417C26.7962 5.53375 26.8021 5.53743 26.808 5.53891Z"
          fill="white"
        />
        <path
          d="M15.5415 20.6667C12.8816 18.1344 10.2358 15.6155 7.56962 13.0771C7.21816 13.9176 6.95665 14.7763 6.7806 15.6604C6.69194 16.1074 6.73723 16.513 7.07975 16.8409C8.5787 18.2777 10.0834 19.709 11.5913 21.1379C11.8936 21.4245 12.2763 21.5156 12.6922 21.4476C13.2235 21.3608 13.7497 21.2472 14.2658 21.0972C14.6989 20.9715 15.1326 20.844 15.5415 20.6667Z"
          fill="white"
        />
        <path
          d="M13.3715 22.6947C13.1712 22.7323 13.1859 22.8343 13.2069 22.9655C13.286 23.4513 13.3823 23.9353 13.441 24.4235C13.5794 25.5852 14.7799 25.955 15.6467 25.3733C16.7961 24.6021 17.9857 23.8849 19.1606 23.1483C19.6301 22.8538 19.9554 22.4536 20.0262 21.9253C20.1225 21.2057 20.1614 20.4788 20.2277 19.7148C20.097 19.8017 19.9943 19.8691 19.8929 19.9371C17.9085 21.2634 15.7628 22.2453 13.3715 22.6947Z"
          fill="white"
        />
        <path
          d="M3.3738 15.0321C3.98231 15.1414 4.59847 15.2143 5.20953 15.3126C5.36708 15.3381 5.41491 15.2798 5.44234 15.1468C5.74341 13.667 6.30535 12.2763 7.04143 10.9464C7.48218 10.1491 7.99182 9.39186 8.57609 8.62793C7.8515 8.68015 7.169 8.72631 6.48778 8.77914C5.7855 8.83318 5.27204 9.16778 4.89953 9.73193C4.55254 10.2572 4.18259 10.7679 3.82284 11.2859C3.3974 11.898 2.96175 12.5047 2.55034 13.1253C2.04899 13.8807 2.47698 14.8712 3.3738 15.0321Z"
          fill="white"
        />
        <path
          d="M8.27472 20.6816C8.27089 20.3883 8.12737 20.177 7.84927 20.0543C7.56989 19.9311 7.26118 19.993 7.01879 20.2238C5.53579 21.6332 4.05407 23.0433 2.5749 24.4558C2.26363 24.7527 2.2547 25.1741 2.54045 25.4517C2.82557 25.7286 3.27717 25.7298 3.58653 25.4365C5.0759 24.0234 6.56209 22.606 8.04892 21.1899C8.19499 21.0509 8.2811 20.8845 8.27472 20.6816Z"
          fill="white"
        />
        <path
          d="M5.40276 17.9553C5.20694 17.951 5.0411 18.0215 4.90715 18.1478C4.12132 18.8917 3.33421 19.6349 2.55731 20.3867C2.26071 20.674 2.27794 21.0972 2.57007 21.3638C2.85391 21.6225 3.28191 21.6201 3.58042 21.3523C3.74882 21.2017 3.90828 21.042 4.07157 20.8859C4.68582 20.3011 5.30262 19.7175 5.91368 19.1297C6.13884 18.9129 6.19433 18.6105 6.06612 18.3542C5.93409 18.0907 5.70956 17.9589 5.40276 17.9553Z"
          fill="white"
        />
        <path
          d="M9.71459 22.0451C9.51303 22.0409 9.33954 22.1058 9.19794 22.2413C8.41402 22.987 7.62883 23.7309 6.84874 24.4802C6.65611 24.6654 6.59232 24.8956 6.67652 25.15C6.84938 25.6729 7.47128 25.8162 7.89736 25.4203C8.54733 24.8154 9.18518 24.1991 9.82749 23.5869C9.96846 23.4527 10.1158 23.324 10.2453 23.1801C10.4443 22.959 10.4864 22.7028 10.3588 22.4386C10.2351 22.1824 10.0137 22.0506 9.71459 22.0451Z"
          fill="white"
        />
        <path
          d="M19.1004 7.62309C17.9184 7.63038 16.9547 8.56191 16.9629 9.68959C16.9712 10.8288 17.9312 11.7348 19.1227 11.7282C20.3155 11.7215 21.278 10.8063 21.2774 9.67927C21.2774 8.54673 20.2919 7.6158 19.1004 7.62309Z"
          fill="white"
        />
      </svg>
    ),
    path: "/",
    id: 1,
  },
  {
    menuTitle: "Script",
    menuIcon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path
          d="M19.5452 19.2815C19.5118 17.4837 18.7224 16.0351 17.2405 14.9238C16.919 14.6832 16.5862 14.6508 16.2222 14.8217C15.7774 15.0311 15.3097 15.1935 14.8196 15.2551C14.5593 15.2876 14.5308 15.3863 14.5329 15.5997C14.5433 16.825 14.5405 18.051 14.537 19.2762C14.535 19.8939 13.9948 20.2868 13.424 20.0946C13.0844 19.98 12.8693 19.6705 12.8686 19.2782C12.8665 18.0198 12.8679 16.7607 12.8679 15.5023C12.8679 15.3969 12.895 15.2969 12.7169 15.2757C12.1718 15.2101 11.6575 15.0384 11.1626 14.8131C10.818 14.6561 10.495 14.6806 10.1888 14.9079C8.68599 16.0245 7.889 17.485 7.85976 19.3027C7.83958 20.5691 7.86046 21.8368 7.85072 23.1032C7.84932 23.2887 7.89596 23.3331 8.09086 23.3318C9.96047 23.3239 11.8308 23.3272 13.7004 23.3272C15.57 23.3272 17.4403 23.3245 19.3099 23.3311C19.4978 23.3318 19.5556 23.2987 19.5542 23.1058C19.5445 21.8322 19.5688 20.5565 19.5452 19.2815Z"
          fill="#161E32"
        />
        <path
          d="M13.6944 13.7851C16.006 13.7864 17.8756 12.0184 17.8784 9.82828C17.8818 7.61163 16.0275 5.83433 13.7104 5.83301C11.3981 5.83168 9.52915 7.59904 9.52637 9.78852C9.52359 12.0052 11.3786 13.7838 13.6944 13.7851Z"
          fill="#161E32"
        />
        <path
          d="M6.82108 15.906C5.83755 16.2526 4.85541 16.2493 3.87118 15.9054C3.6039 15.8119 3.34009 15.8424 3.10065 15.9968C1.88255 16.7814 1.20876 17.8649 1.17883 19.2738C1.15586 20.3413 1.17326 21.4096 1.17396 22.4771C1.17466 23.0026 1.51364 23.326 2.06491 23.3267C3.36028 23.328 4.65634 23.322 5.9517 23.332C6.15077 23.3333 6.19114 23.2829 6.18975 23.1014C6.1807 21.8761 6.18349 20.6508 6.18558 19.4255C6.18697 18.8033 6.26771 18.1909 6.43059 17.5866C6.58999 16.9942 6.8343 16.4342 7.13639 15.8901C7.01597 15.8451 6.91922 15.8716 6.82108 15.906Z"
          fill="#161E32"
        />
        <path
          d="M24.4312 16.0737C24.1076 15.8477 23.779 15.8132 23.4032 15.9418C22.6946 16.1843 21.9693 16.2287 21.2252 16.0843C20.9141 16.024 20.6287 15.8643 20.2598 15.8643C20.2925 15.9292 20.3057 15.9584 20.321 15.9862C20.953 17.118 21.2336 18.3274 21.2231 19.6064C21.2134 20.7654 21.228 21.9244 21.2148 23.0834C21.212 23.2988 21.2795 23.3339 21.4876 23.3326C22.7656 23.3227 24.0442 23.328 25.3222 23.3273C25.895 23.3266 26.2319 23.0112 26.2326 22.4711C26.234 21.4281 26.241 20.385 26.2312 19.342C26.2166 17.963 25.5923 16.8848 24.4312 16.0737Z"
          fill="#161E32"
        />
        <path
          d="M5.36309 9.01367C3.50532 9.01169 2.01088 10.4232 2.00879 12.1813C2.0067 13.9493 3.4907 15.3734 5.33595 15.3754C7.19373 15.3773 8.68816 13.9658 8.69094 12.2078C8.69303 10.4391 7.21043 9.01566 5.36309 9.01367Z"
          fill="#161E32"
        />
        <path
          d="M25.397 12.2005C25.3984 10.4344 23.913 9.01433 22.0622 9.01367C20.2072 9.01301 18.7155 10.4272 18.7148 12.1879C18.7141 13.9533 20.2002 15.374 22.049 15.3754C23.904 15.376 25.3956 13.9619 25.397 12.2005Z"
          fill="#161E32"
        />
      </svg>
    ),
    path: "/script",
    id: 2,
  },

  {
    menuTitle: "Live Chat",
    menuIcon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.7861 20.7184H25.0369V14.6866C25.0369 14.3859 24.7925 14.1419 24.49 14.1419C24.1882 14.1419 23.9432 14.3859 23.9432 14.6866V20.7184H3.24996V8.07082C3.24996 7.10501 4.03855 6.31896 5.00871 6.31896H14.9257C15.2276 6.31896 15.4726 6.07492 15.4726 5.77423C15.4726 5.47353 15.2276 5.22949 14.9257 5.22949H5.00871C3.4359 5.22949 2.15621 6.50417 2.15621 8.07082V20.7184H1.04004C0.738163 20.7184 0.493164 20.9625 0.493164 21.2632C0.493164 23.5358 2.3498 25.3852 4.63137 25.3852H22.1948C24.4764 25.3852 26.333 23.5358 26.333 21.2632C26.333 20.9625 26.088 20.7184 25.7861 20.7184Z"
          fill="white"
        />
        <path
          d="M16.1634 11.5561L14.3484 14.1109C14.2138 14.2999 14.2144 14.5532 14.3495 14.7422C14.4539 14.8877 14.6213 14.9704 14.7946 14.9704C14.846 14.9704 14.898 14.9628 14.9488 14.9481L18.5719 13.8875C19.4502 14.356 20.4345 14.6022 21.4348 14.6022C24.7827 14.6022 27.5067 11.8894 27.5067 8.55404C27.5067 5.21918 24.7827 2.50586 21.4348 2.50586C18.0868 2.50586 15.3628 5.21918 15.3628 8.55404C15.3628 9.61354 15.6384 10.6436 16.1634 11.5561Z"
          fill="white"
        />
      </svg>
    ),
    path: "/live-chat",
    id: 3,
  },

  {
    menuTitle: "Analytics",
    menuIcon: (
      <svg
        width="28"
        height="25"
        viewBox="0 0 28 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.5228 13.1924L9.37079 13.7881C10.0387 13.9248 10.7521 14.0002 11.5004 14.0002C13.0129 14.0002 14.383 13.6919 15.5228 13.1924ZM17.2693 5.85742C18.4827 6.84155 19.0004 7.97144 19.0004 9.00024C19.0004 9.97119 18.5393 11.0322 17.4673 11.9758L17.2693 5.85742ZM20.9472 5.50391C21.6219 6.5603 22.0004 7.74658 22.0004 9.00024C22.0004 13.4185 17.2994 17.0002 11.5004 17.0002C10.2646 17.0002 9.07874 16.8376 7.97754 16.5388C8.61694 17.5793 9.55432 18.5056 10.7385 19.2446C12.819 20.543 15.4986 21.1626 18.2126 20.9727C19.1609 20.9062 20.0876 20.7429 20.9698 20.4912L26.1677 24.2878L24.0305 19.1479C24.4781 18.8687 24.8986 18.5608 25.2869 18.2261C26.8436 16.8848 27.7778 15.2048 27.9625 13.4539L27.9906 13.4551C27.9942 13.3718 27.9961 13.2886 27.9963 13.2053C27.9965 13.1372 27.9955 13.0691 27.9933 13.001C27.9952 12.9424 27.9962 12.8835 27.9963 12.8247C27.9965 12.7322 27.9946 12.6396 27.9906 12.5466L27.9624 12.5479C27.8799 11.7656 27.6473 10.9922 27.2703 10.2532C26.7479 9.22925 25.9593 8.29248 24.9529 7.50049C23.9464 6.70825 22.7433 6.07764 21.4172 5.64673C21.2618 5.59619 21.1051 5.54858 20.9472 5.50391Z"
          fill="black"
        />
        <mask id="path-2-inside-1_1788_5083" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21 8C21 12.4183 16.299 16 10.5 16C9.3462 16 8.23587 15.8582 7.19738 15.5963L1.55882 19.524L4.17217 14.3846C1.63767 12.9241 0 10.6078 0 8C0 3.58172 4.70101 0 10.5 0C16.299 0 21 3.58172 21 8ZM7 7H5V9H7V7ZM9 7H11V9H9V7ZM15 7H13V9H15V7Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 8C21 12.4183 16.299 16 10.5 16C9.3462 16 8.23587 15.8582 7.19738 15.5963L1.55882 19.524L4.17217 14.3846C1.63767 12.9241 0 10.6078 0 8C0 3.58172 4.70101 0 10.5 0C16.299 0 21 3.58172 21 8ZM7 7H5V9H7V7ZM9 7H11V9H9V7ZM15 7H13V9H15V7Z"
          fill="black"
        />
        <path
          d="M7.19738 15.5963L7.44197 14.6266L6.9999 14.5151L6.6258 14.7757L7.19738 15.5963ZM1.55882 19.524L0.66744 19.0707L2.13039 20.3445L1.55882 19.524ZM4.17217 14.3846L5.06355 14.8379L5.49369 13.992L4.67145 13.5182L4.17217 14.3846ZM5 7V6H4V7H5ZM7 7H8V6H7V7ZM5 9H4V10H5V9ZM7 9V10H8V9H7ZM11 7H12V6H11V7ZM9 7V6H8V7H9ZM11 9V10H12V9H11ZM9 9H8V10H9V9ZM13 7V6H12V7H13ZM15 7H16V6H15V7ZM13 9H12V10H13V9ZM15 9V10H16V9H15ZM10.5 17C13.5987 17 16.4413 16.0442 18.5307 14.4523C20.6209 12.8597 22 10.5877 22 8H20C20 9.83056 19.0286 11.5585 17.3186 12.8614C15.6077 14.1649 13.2003 15 10.5 15V17ZM6.95279 16.5659C8.07196 16.8482 9.26447 17 10.5 17V15C9.42793 15 8.39978 14.8682 7.44197 14.6266L6.95279 16.5659ZM2.13039 20.3445L7.76896 16.4168L6.6258 14.7757L0.987238 18.7034L2.13039 20.3445ZM3.28079 13.9313L0.66744 19.0707L2.45019 19.9772L5.06355 14.8379L3.28079 13.9313ZM-1 8C-1 11.0594 0.919709 13.6646 3.67289 15.251L4.67145 13.5182C2.35563 12.1837 1 10.1562 1 8H-1ZM10.5 -1C7.40134 -1 4.55875 -0.0442207 2.46934 1.54771C0.379104 3.14027 -1 5.41229 -1 8H1C1 6.16944 1.9714 4.44145 3.68142 3.13858C5.39226 1.83508 7.79967 1 10.5 1V-1ZM22 8C22 5.41229 20.6209 3.14027 18.5307 1.54771C16.4413 -0.0442207 13.5987 -1 10.5 -1V1C13.2003 1 15.6077 1.83508 17.3186 3.13858C19.0286 4.44145 20 6.16944 20 8H22ZM5 8H7V6H5V8ZM6 9V7H4V9H6ZM7 8H5V10H7V8ZM6 7V9H8V7H6ZM11 6H9V8H11V6ZM12 9V7H10V9H12ZM9 10H11V8H9V10ZM8 7V9H10V7H8ZM13 8H15V6H13V8ZM14 9V7H12V9H14ZM15 8H13V10H15V8ZM14 7V9H16V7H14Z"
          fill="black"
          mask="url(#path-2-inside-1_1788_5083)"
        />
      </svg>
    ),
    path: "/analytics",
    id: 4,
  },

  {
    menuTitle: "Lost Leads",
    menuIcon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.6663 17.333C20.9939 17.3365 20.3391 17.5484 19.7922 17.9397L17.138 16.3689C17.2632 15.9801 17.329 15.5747 17.333 15.1664C17.3299 14.2081 17.0092 13.2779 16.4212 12.5212C15.8331 11.7646 15.0109 11.2243 14.083 10.9847V8.47136C14.8058 8.2158 15.415 7.71295 15.8029 7.05167C16.1909 6.39039 16.3325 5.61326 16.2029 4.85764C16.0732 4.10202 15.6806 3.41656 15.0945 2.92241C14.5083 2.42825 13.7663 2.15723 12.9997 2.15723C12.233 2.15723 11.491 2.42825 10.9049 2.92241C10.3187 3.41656 9.92612 4.10202 9.79648 4.85764C9.66684 5.61326 9.80849 6.39039 10.1964 7.05167C10.5843 7.71295 11.1935 8.2158 11.9163 8.47136V10.9847C10.9885 11.2243 10.1662 11.7646 9.57817 12.5212C8.99012 13.2779 8.66945 14.2081 8.66634 15.1664C8.67037 15.5747 8.73611 15.9801 8.86134 16.3689L6.20718 17.9397C5.66026 17.5484 5.00545 17.3365 4.33301 17.333C3.69022 17.333 3.06187 17.5236 2.52741 17.8807C1.99295 18.2379 1.57639 18.7454 1.3304 19.3393C1.08442 19.9332 1.02006 20.5866 1.14546 21.2171C1.27086 21.8475 1.58039 22.4266 2.03491 22.8811C2.48943 23.3356 3.06853 23.6452 3.69897 23.7706C4.3294 23.896 4.98287 23.8316 5.57673 23.5856C6.17059 23.3396 6.67817 22.9231 7.03528 22.3886C7.3924 21.8542 7.58301 21.2258 7.58301 20.583C7.579 20.2896 7.53527 19.9981 7.45301 19.7164L9.94468 18.2322C10.7566 19.0393 11.8549 19.4923 12.9997 19.4923C14.1445 19.4923 15.2428 19.0393 16.0547 18.2322L18.5463 19.7164C18.3648 20.3724 18.3939 21.0689 18.6294 21.7076C18.865 22.3463 19.2951 22.8948 19.8592 23.2759C20.4232 23.657 21.0927 23.8514 21.7731 23.8316C22.4536 23.8118 23.1106 23.5789 23.6515 23.1657C24.1925 22.7525 24.59 22.1798 24.7881 21.5285C24.9861 20.8773 24.9747 20.1802 24.7553 19.5358C24.536 18.8914 24.1199 18.3321 23.5656 17.9369C23.0114 17.5417 22.3471 17.3304 21.6663 17.333ZM4.33301 21.6664C4.11875 21.6664 3.90929 21.6028 3.73114 21.4838C3.55299 21.3647 3.41413 21.1955 3.33214 20.9976C3.25014 20.7996 3.22869 20.5818 3.27049 20.3717C3.31229 20.1615 3.41547 19.9685 3.56698 19.817C3.71848 19.6655 3.91152 19.5623 4.12166 19.5205C4.33181 19.4787 4.54963 19.5002 4.74758 19.5822C4.94554 19.6641 5.11473 19.803 5.23377 19.9812C5.35281 20.1593 5.41634 20.3688 5.41634 20.583C5.41634 20.8703 5.30221 21.1459 5.09904 21.3491C4.89588 21.5522 4.62033 21.6664 4.33301 21.6664ZM12.9997 4.33302C13.2139 4.33302 13.4234 4.39656 13.6015 4.5156C13.7797 4.63464 13.9185 4.80383 14.0005 5.00178C14.0825 5.19974 14.104 5.41756 14.0622 5.6277C14.0204 5.83785 13.9172 6.03088 13.7657 6.18239C13.6142 6.33389 13.4212 6.43707 13.211 6.47887C13.0009 6.52067 12.7831 6.49922 12.5851 6.41723C12.3871 6.33523 12.218 6.19638 12.0989 6.01822C11.9799 5.84007 11.9163 5.63062 11.9163 5.41636C11.9163 5.12904 12.0305 4.85349 12.2336 4.65032C12.4368 4.44716 12.7124 4.33302 12.9997 4.33302ZM12.9997 17.333C12.5711 17.333 12.1522 17.2059 11.7959 16.9679C11.4396 16.7298 11.1619 16.3914 10.9979 15.9955C10.8339 15.5996 10.791 15.164 10.8746 14.7437C10.9582 14.3234 11.1646 13.9373 11.4676 13.6343C11.7706 13.3313 12.1567 13.1249 12.577 13.0413C12.9973 12.9577 13.4329 13.0006 13.8288 13.1646C14.2247 13.3286 14.5631 13.6063 14.8012 13.9626C15.0393 14.3189 15.1663 14.7378 15.1663 15.1664C15.1663 15.741 14.9381 16.2921 14.5317 16.6984C14.1254 17.1047 13.5743 17.333 12.9997 17.333ZM21.6663 21.6664C21.4521 21.6664 21.2426 21.6028 21.0645 21.4838C20.8863 21.3647 20.7475 21.1955 20.6655 20.9976C20.5835 20.7996 20.562 20.5818 20.6038 20.3717C20.6456 20.1615 20.7488 19.9685 20.9003 19.817C21.0518 19.6655 21.2448 19.5623 21.455 19.5205C21.6651 19.4787 21.883 19.5002 22.0809 19.5822C22.2789 19.6641 22.4481 19.803 22.5671 19.9812C22.6861 20.1593 22.7497 20.3688 22.7497 20.583C22.7497 20.8703 22.6355 21.1459 22.4324 21.3491C22.2292 21.5522 21.9537 21.6664 21.6663 21.6664Z"
          fill="#161E32"
        />
      </svg>
    ),
    path: "/lost-leads",
    id: 7,
  },
  {
    menuTitle: "Connect Channel",
    menuIcon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6667 4H6.22222C5.63285 4 5.06762 4.24583 4.65087 4.68342C4.23413 5.121 4 5.71449 4 6.33333V11C4 11.6188 4.23413 12.2123 4.65087 12.6499C5.06762 13.0875 5.63285 13.3333 6.22222 13.3333H10.6667C11.256 13.3333 11.8213 13.0875 12.238 12.6499C12.6548 12.2123 12.8889 11.6188 12.8889 11V6.33333C12.8889 5.71449 12.6548 5.121 12.238 4.68342C11.8213 4.24583 11.256 4 10.6667 4ZM10.6667 15.6667H6.22222C5.63285 15.6667 5.06762 15.9125 4.65087 16.3501C4.23413 16.7877 4 17.3812 4 18V22.6667C4 23.2855 4.23413 23.879 4.65087 24.3166C5.06762 24.7542 5.63285 25 6.22222 25H10.6667C11.256 25 11.8213 24.7542 12.238 24.3166C12.6548 23.879 12.8889 23.2855 12.8889 22.6667V18C12.8889 17.3812 12.6548 16.7877 12.238 16.3501C11.8213 15.9125 11.256 15.6667 10.6667 15.6667ZM21.7778 15.6667H17.3333C16.744 15.6667 16.1787 15.9125 15.762 16.3501C15.3452 16.7877 15.1111 17.3812 15.1111 18V22.6667C15.1111 23.2855 15.3452 23.879 15.762 24.3166C16.1787 24.7542 16.744 25 17.3333 25H21.7778C22.3671 25 22.9324 24.7542 23.3491 24.3166C23.7659 23.879 24 23.2855 24 22.6667V18C24 17.3812 23.7659 16.7877 23.3491 16.3501C22.9324 15.9125 22.3671 15.6667 21.7778 15.6667ZM19.5556 4C19.8277 4.00004 20.0904 4.10495 20.2937 4.29483C20.4971 4.48472 20.627 4.74637 20.6589 5.03017L20.6667 5.16667V7.5H22.8889C23.1721 7.50033 23.4445 7.61419 23.6504 7.81832C23.8563 8.02245 23.9803 8.30145 23.9969 8.59829C24.0135 8.89514 23.9215 9.18744 23.7397 9.41547C23.5579 9.6435 23.3001 9.79005 23.0189 9.82517L22.8889 9.83333H20.6667V12.1667C20.6664 12.464 20.5579 12.75 20.3635 12.9663C20.1691 13.1825 19.9034 13.3126 19.6207 13.33C19.338 13.3475 19.0596 13.2509 18.8424 13.06C18.6252 12.8692 18.4857 12.5984 18.4522 12.3032L18.4444 12.1667V9.83333H16.2222C15.939 9.833 15.6666 9.71914 15.4607 9.51501C15.2548 9.31088 15.1308 9.03189 15.1143 8.73504C15.0977 8.43819 15.1896 8.14589 15.3714 7.91786C15.5532 7.68983 15.811 7.54329 16.0922 7.50817L16.2222 7.5H18.4444V5.16667C18.4444 4.85725 18.5615 4.5605 18.7699 4.34171C18.9783 4.12292 19.2609 4 19.5556 4Z"
          fill="white"
        />
      </svg>
    ),
    path: "/connect-channels",
    id: 6,
  },
  {
    menuTitle: "Setting",
    menuIcon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 16C15.1046 16 16 15.1046 16 14C16 12.8954 15.1046 12 14 12C12.8954 12 12 12.8954 12 14C12 15.1046 12.8954 16 14 16Z"
          fill="white"
        />
        <path
          d="M24.528 16.1043L24.505 16.0862L22.9551 14.9025C22.857 14.8269 22.7787 14.7296 22.7266 14.6188C22.6745 14.508 22.6502 14.3867 22.6556 14.265V13.7121C22.6507 13.5911 22.6753 13.4707 22.7275 13.3608C22.7796 13.2509 22.8578 13.1546 22.9556 13.0798L24.505 11.8957L24.528 11.8775C24.767 11.6836 24.9273 11.4133 24.9804 11.1149C25.0335 10.8164 24.9758 10.5094 24.8178 10.2485L22.7204 6.71417C22.718 6.71084 22.7159 6.70732 22.714 6.70365C22.5551 6.44643 22.3087 6.25153 22.0176 6.15281C21.7265 6.05408 21.4091 6.05777 21.1205 6.16322L21.1033 6.16943L19.2815 6.88348C19.1665 6.92876 19.0421 6.94678 18.9185 6.93605C18.795 6.92533 18.6758 6.88616 18.5709 6.82178C18.4098 6.72294 18.2461 6.62952 18.0798 6.54152C17.972 6.48457 17.8794 6.40374 17.8095 6.30555C17.7397 6.20735 17.6945 6.09454 17.6776 5.97622L17.4031 4.08278L17.3972 4.04835C17.3375 3.75508 17.1759 3.49078 16.9396 3.29987C16.7033 3.10896 16.4068 3.00307 16.0998 3H11.9002C11.5889 3.00097 11.2879 3.10891 11.0503 3.3048C10.8127 3.50069 10.6537 3.77196 10.6013 4.07083L10.5969 4.09761L10.3234 5.99487C10.3066 6.11286 10.2617 6.2254 10.1924 6.32354C10.1231 6.42168 10.0312 6.50271 9.92411 6.56017C9.75732 6.64767 9.59354 6.7405 9.43304 6.83852C9.32828 6.90251 9.20942 6.94137 9.08624 6.95193C8.96306 6.96249 8.83906 6.94444 8.72443 6.89926L6.90109 6.18187L6.8839 6.17517C6.59488 6.06961 6.27702 6.06606 5.98559 6.16515C5.69417 6.26425 5.44765 6.4597 5.2889 6.71752L5.28252 6.72804L3.18221 10.2648C3.0239 10.5259 2.96613 10.8333 3.01921 11.1321C3.07229 11.4309 3.23276 11.7015 3.47194 11.8957L3.49502 11.9138L5.04484 13.0975C5.14299 13.1731 5.22131 13.2704 5.27339 13.3812C5.32546 13.492 5.34979 13.6133 5.34439 13.735V14.2879C5.34931 14.4089 5.32468 14.5293 5.27252 14.6392C5.22036 14.7491 5.14216 14.8454 5.04435 14.9202L3.49502 16.1043L3.47194 16.1225C3.233 16.3164 3.07265 16.5867 3.01957 16.8851C2.96649 17.1836 3.02414 17.4906 3.18221 17.7515L5.27957 21.2858C5.28199 21.2892 5.28412 21.2927 5.28596 21.2963C5.44488 21.5536 5.69128 21.7485 5.98238 21.8472C6.27347 21.9459 6.59088 21.9422 6.87948 21.8368L6.89667 21.8306L8.71706 21.1165C8.83205 21.0712 8.95644 21.0532 9.07999 21.0639C9.20353 21.0747 9.32269 21.1138 9.42764 21.1782C9.58871 21.2774 9.7524 21.3708 9.91871 21.4585C10.0265 21.5154 10.1191 21.5963 10.189 21.6945C10.2588 21.7926 10.304 21.9055 10.3209 22.0238L10.5939 23.9172L10.5998 23.9517C10.6597 24.2454 10.8217 24.5101 11.0586 24.701C11.2955 24.892 11.5927 24.9976 11.9002 25H16.0998C16.4111 24.999 16.7121 24.8911 16.9497 24.6952C17.1873 24.4993 17.3463 24.228 17.3987 23.9292L17.4031 23.9024L17.6766 22.0051C17.6937 21.8869 17.7389 21.7742 17.8086 21.6761C17.8784 21.5779 17.9707 21.497 18.0783 21.4398C18.2463 21.3518 18.4103 21.2586 18.5694 21.1615C18.6742 21.0975 18.793 21.0586 18.9162 21.0481C19.0394 21.0375 19.1634 21.0556 19.278 21.1007L21.1014 21.8157L21.1185 21.8224C21.4075 21.9282 21.7255 21.9318 22.0169 21.8327C22.3084 21.7336 22.5549 21.538 22.7135 21.2801C22.7155 21.2765 22.7176 21.273 22.7199 21.2696L24.8173 17.7357C24.9759 17.4746 25.0339 17.1671 24.9809 16.8682C24.9279 16.5693 24.7674 16.2985 24.528 16.1043ZM17.9241 14.1798C17.8884 14.9205 17.6324 15.635 17.1874 16.2366C16.7424 16.8382 16.1275 17.3009 15.4175 17.5684C14.7075 17.836 13.933 17.8968 13.1881 17.7436C12.4432 17.5904 11.7601 17.2297 11.2218 16.7054C10.6835 16.1811 10.3133 15.5157 10.156 14.7903C9.99882 14.0648 10.0614 13.3105 10.3362 12.6191C10.611 11.9276 11.0862 11.3288 11.7039 10.8955C12.3217 10.4621 13.0554 10.213 13.8158 10.1782C14.3618 10.1548 14.9068 10.2423 15.4161 10.4351C15.9255 10.6279 16.3881 10.9219 16.7745 11.2982C17.1609 11.6746 17.4626 12.1252 17.6605 12.6213C17.8585 13.1173 17.9482 13.6481 17.9241 14.1798Z"
          fill="white"
        />
      </svg>
    ),
    path: "/setting",
    id: 5,
  },
];

export const SidebarMain = ({ open, backdropClick }) => {
  const [menuList, setMenuList] = useState(allMenuList);
  let navigate = useNavigate();
  const currentPath = window?.location?.pathname;
  const [collpasedToggle, setCollpasedToggle] = useState(false);
  const [expandedSubMenus, setExpandedSubMenus] = useState({});
  // const shouldCollapse = currentPath === '/chat-widget' || currentPath === '/web-chat' || currentPath === '/work-space' || currentPath === '/add-channel';

  useEffect(() => {
    const path = window?.location?.pathname;
    if (
      path === "/chat-widget" ||
      path === "/web-chat/chat" ||
      path === "/advance/flow" ||
      path === "/advance/automation" ||
      path === "/advance/content" ||
      path === "/advance/tools" ||
      path === "/web-chat/overview"
    ) {
      console.log("Inside useEffects if condition");
      setCollpasedToggle(true);
      setExpandedSubMenus(false);
    } else {
      setCollpasedToggle(false);
    }
  }, []);

  const collpasedFn = (path, id, hasSubMenu) => {
    // Toggle submenu if it exists
    if (hasSubMenu) {
      setExpandedSubMenus((prevState) => ({
        ...prevState,
        [id]: !prevState[id], // Toggle the specific submenu
      }));
      setCollpasedToggle(false);
    } else {
      if (
        path === "/chat-widget" ||
        path === "/web-chat/chat" ||
        path === "/advance/flow" ||
        path === "/advance/automation" ||
        path === "/advance/content" ||
        path === "/advance/tools" ||
        path === "/web-chat/overview"
      ) {
        setCollpasedToggle(true);
        setExpandedSubMenus(false);
      } else {
        setCollpasedToggle(false);
      }

      // If no submenu, perform navigation and sidebar collapse logic
      navigate(path);
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const filterMenuListByIds = (ids) => {
    return menuList.filter((item) => ids.includes(item.id));
  };

  return (
    <div
      className={
        collpasedToggle ? "sidebar_main h-screen active" : "sidebar_main"
      }
    >
      <Sidebar
        collapsed={collpasedToggle}
        toggled={open}
        onBackdropClick={backdropClick}
        rtl={false}
        customBreakPoint="1199px"
        className={collpasedToggle ? "active" : ""}
      >
        <div className="sidebar_wrap">
          <div
            className="sidebar_inner"
            style={{ flex: 1, marginBottom: "32px" }}
          >
            <Menu>
              <MenuItem onClick={handleLogoClick} className="logo_wrap">
                <img
                  src={collpasedToggle ? "/only_logo.png" : "/blue_logo.png"}
                  alt=""
                />
              </MenuItem>
              {menuList.map((val, index) => {
                return (
                  <div key={index}>
                    {" "}
                    {/* Wrap in a div or React.Fragment */}
                    <MenuItem
                      active={val?.path === currentPath}
                      onClick={() =>
                        collpasedFn(val?.path, val?.id, !!val.subMenu)
                      }
                      component="div"
                      icon={val?.menuIcon}
                    >
                      {val?.menuTitle}

                      {val?.subMenu && val.subMenu.length > 0 && (
                        <svg
                          style={{ marginLeft: "5px" }}
                          version="1.1"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="15px"
                          height="15px"
                          viewBox="0 0 122.88 80.593"
                          enable-background="new 0 0 122.88 80.593"
                        >
                          <g>
                            <polygon points="122.88,0 122.88,30.82 61.44,80.593 0,30.82 0,0 61.44,49.772 122.88,0" />
                          </g>
                        </svg>
                      )}
                    </MenuItem>
                    <div
                      style={{
                        paddingLeft: "20px",
                        marginTop: "1px",
                        display: expandedSubMenus[val.id] ? "block" : "none", // Toggle visibility
                      }}
                    >
                      {val?.subMenu &&
                        val.subMenu.length > 0 &&
                        val?.subMenu.map((subItem, subIndex) => {
                          return (
                            <MenuItem
                              key={`${index}-${subIndex}`}
                              active={subItem?.path === currentPath}
                              component="div"
                              onClick={() => collpasedFn(subItem?.path)}
                              icon={subItem?.menuIcon}
                            >
                              {subItem?.menuTitle}
                            </MenuItem>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </Menu>
          </div>
        </div>
      </Sidebar>

      <div
        variant="primary"
        className="arrow_btn"
        onClick={() => setCollpasedToggle(!collpasedToggle)}
      >
        <svg
          fill="#ffffff"
          height="16px"
          width="16px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          stroke="#ffffff"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M168.837,256L388.418,36.418c8.331-8.331,8.331-21.839,0-30.17c-8.331-8.331-21.839-8.331-30.17,0L123.582,240.915 c-8.331,8.331-8.331,21.839,0,30.17l234.667,234.667c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17 L168.837,256z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};
