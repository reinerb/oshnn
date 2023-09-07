import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

function Logo({ className }: Props) {
  return (
    <svg
      id="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(
        "fill-secondary-500 h-20 w-20 transition-colors duration-200 sm:h-24 sm:w-24 lg:h-28 lg:w-28",
        className,
      )}
      viewBox="0 0 966 966"
    >
      <path
        d="M0 0 C0.70823914 0.09945923 1.41647827 0.19891846 2.1461792 0.3013916 C50.58769938 7.17562915 97.42653948 20.77395659 142 41 C142.76747559 41.34385742 143.53495117 41.68771484 144.32568359 42.04199219 C182.14795265 59.02272947 217.31470039 82.36795938 249 109 C249.515625 109.43070801 250.03125 109.86141602 250.5625 110.30517578 C266.99646805 124.05990317 283.45818769 138.69641735 297.34375 155.06640625 C299.25985577 157.30336935 301.25512856 159.45803578 303.25 161.625 C308.34835728 167.27733837 313.00842754 173.23456862 317.65332031 179.25927734 C318.90267866 180.87420211 320.16562873 182.47858693 321.4296875 184.08203125 C335.0694077 201.50062475 346.89586637 219.8774855 358 239 C358.4635791 239.79051758 358.9271582 240.58103516 359.40478516 241.39550781 C393.06279362 298.98781273 412.29009307 363.99838379 420 430 C420.12004395 431.01884277 420.24008789 432.03768555 420.36376953 433.08740234 C430.22554762 522.04916503 412.80497054 617.54243975 371.10302734 696.88378906 C369.81387649 699.35708689 368.55788381 701.84620153 367.30078125 704.3359375 C353.79389621 730.90284639 337.46240403 755.62461582 319 779 C318.45843262 779.68723145 317.91686523 780.37446289 317.35888672 781.08251953 C310.36127184 789.92565921 303.06312153 798.37071154 295.32861328 806.57421875 C293.40604539 808.6373934 291.55036458 810.75795016 289.6875 812.875 C281.06991906 822.48328824 271.8669643 831.67804079 262 840 C260.89164708 840.96954855 259.78505833 841.94111547 258.6796875 842.9140625 C190.25956348 903.02045537 105.91016717 942.27294194 16.25 957.3125 C15.51608032 957.43596802 14.78216064 957.55943604 14.02600098 957.68664551 C3.05728979 959.51280971 -7.93100674 960.93857412 -19 962 C-20.16184814 962.11166504 -21.32369629 962.22333008 -22.52075195 962.33837891 C-34.09651512 963.26867006 -45.70604265 963.18608664 -57.31176758 963.18530273 C-60.8987234 963.1874765 -64.48536442 963.20565451 -68.07226562 963.22460938 C-83.14686762 963.26182277 -98.00861354 962.59021369 -113 961 C-114.07273666 960.88644669 -114.07273666 960.88644669 -115.16714478 960.77059937 C-119.18438002 960.33248891 -123.18633091 959.81518283 -127.1875 959.25 C-128.38834229 959.08081055 -129.58918457 958.91162109 -130.82641602 958.73730469 C-176.03894035 952.11150884 -220.41586082 938.92412249 -262 920 C-263.0430127 919.52594727 -264.08602539 919.05189453 -265.16064453 918.56347656 C-303.90801484 900.78967134 -340.34450339 877.7664931 -372.6394043 849.8894043 C-374.80219646 848.02322601 -376.97839667 846.17554472 -379.17138672 844.3449707 C-387.38448101 837.45701134 -395.0961294 830.18873007 -402.63452148 822.57128906 C-404.45559087 820.73172541 -406.28477504 818.90052859 -408.11523438 817.0703125 C-413.95319709 811.21491831 -419.66426328 805.32262558 -425 799 C-425.96034138 797.90458295 -426.92254189 796.81079261 -427.88671875 795.71875 C-434.80665457 787.79700368 -441.24538797 779.60359385 -447.45263672 771.11376953 C-449.03404477 768.95349327 -450.62806866 766.80290418 -452.22265625 764.65234375 C-500.73497821 698.82247001 -529.47111408 621.60414284 -541 541 C-541.18079102 539.75283203 -541.36158203 538.50566406 -541.54785156 537.22070312 C-546.86605321 498.46021162 -546.51269197 456.71762187 -541 418 C-540.90289734 417.3168573 -540.80579468 416.6337146 -540.70574951 415.92987061 C-534.17050599 370.46567304 -522.35364162 324.76002414 -503 283 C-502.52320801 281.96794434 -502.04641602 280.93588867 -501.55517578 279.87255859 C-498.13917608 272.53029904 -494.61279603 265.24730205 -491 258 C-490.60989746 257.2157666 -490.21979492 256.4315332 -489.81787109 255.62353516 C-472.4508295 221.02202481 -449.44836369 187.89134198 -423.1953125 159.40625 C-421.99611293 158.09182484 -420.80438671 156.76976457 -419.65234375 155.41381836 C-414.25852982 149.08857268 -408.41518243 143.22907561 -402.54052734 137.35522461 C-400.76238228 135.57489748 -398.99240439 133.78671623 -397.22265625 131.99804688 C-390.4533524 125.19568892 -383.52341383 118.96766996 -376 113 C-374.2744615 111.53424134 -372.5716147 110.04593056 -370.86987305 108.55273438 C-362.911524 101.57623526 -354.55862301 95.21766506 -346 89 C-345.31534668 88.49968262 -344.63069336 87.99936523 -343.92529297 87.48388672 C-333.98002143 80.23974255 -323.76628622 73.59422436 -313.19140625 67.30688477 C-311.67955145 66.4052628 -310.17197522 65.49644096 -308.66796875 64.58178711 C-282.11034927 48.46319996 -254.16235162 35.60568624 -225 25 C-223.9879248 24.62665527 -222.97584961 24.25331055 -221.93310547 23.86865234 C-189.78999399 12.12893368 -155.94084161 4.18264499 -122 0 C-120.83033691 -0.15936035 -119.66067383 -0.3187207 -118.45556641 -0.48291016 C-79.82671579 -5.67154122 -38.58877555 -5.42360092 0 0 Z M-250 66 C-250.79792969 66.35271973 -251.59585937 66.70543945 -252.41796875 67.06884766 C-278.33745056 78.6007233 -303.15872644 93.20760126 -326 110 C-326.55091309 110.4031543 -327.10182617 110.80630859 -327.66943359 111.22167969 C-331.14565465 113.77257572 -334.58078865 116.37332108 -338 119 C-338.54188965 119.41572266 -339.0837793 119.83144531 -339.64208984 120.25976562 C-359.29761642 135.38371027 -378.71565002 151.80636354 -394.921875 170.640625 C-397.02775999 173.03151699 -399.18760585 175.36163056 -401.36303711 177.68896484 C-406.87001468 183.58618722 -412.07143097 189.60459495 -417 196 C-417.7321875 196.92554688 -418.464375 197.85109375 -419.21875 198.8046875 C-469.67295268 263.18293962 -515.14554924 356.04893609 -514 440 C-511.17279634 436.63267385 -509.59506113 432.95997339 -507.9375 428.9375 C-495.86601058 400.67850119 -478.85471037 374.39896543 -459 351 C-457.80697266 349.53046875 -457.80697266 349.53046875 -456.58984375 348.03125 C-449.9843343 339.98598414 -442.77431136 332.56002007 -435.4375 325.1875 C-434.71345978 324.45569519 -434.71345978 324.45569519 -433.97479248 323.70910645 C-427.32981826 317.00801247 -420.37680506 310.88617492 -413 305 C-411.1849197 303.44049815 -409.37183674 301.87866188 -407.5625 300.3125 C-380.41729471 277.72068398 -347.92277313 259.57962905 -315 247 C-314.33516602 246.74347656 -313.67033203 246.48695313 -312.98535156 246.22265625 C-308.03635962 244.33592944 -303.03756684 242.63401778 -298 241 C-297.0522168 240.690625 -296.10443359 240.38125 -295.12792969 240.0625 C-263.80795136 229.9739005 -230.93821676 223.86056739 -198 223 C-197.23284668 222.97808594 -196.46569336 222.95617187 -195.67529297 222.93359375 C-111.4292159 220.87504575 -26.71552906 248.5185546 38 303 C38.84175781 303.66902344 39.68351563 304.33804687 40.55078125 305.02734375 C54.42077936 316.0616978 67.4927536 328.518801 79 342 C79.83660156 342.97066406 80.67320312 343.94132812 81.53515625 344.94140625 C87.958573 352.43100722 94.05772836 360.12423433 100 368 C94.05947199 364.83616823 88.20532606 361.55206744 82.39770508 358.15185547 C-6.0774456 306.42348614 -111.56683345 282.62022689 -212.31054688 308.56860352 C-238.57055826 315.638437 -264.4158848 325.36071928 -288 339 C-289.07290283 339.6177832 -289.07290283 339.6177832 -290.16748047 340.24804688 C-306.05916065 349.48376225 -320.99789939 360.09110166 -335 372 C-336.09458847 372.90941247 -337.18966904 373.81823286 -338.28515625 374.7265625 C-349.68697765 384.25437385 -360.51953167 394.5361701 -370 406 C-370.91404689 407.06511756 -371.82811117 408.1302202 -372.7421875 409.1953125 C-386.4226885 425.36142263 -398.16647105 443.25201044 -408 462 C-408.31807617 462.58990723 -408.63615234 463.17981445 -408.96386719 463.78759766 C-426.91071881 497.13172289 -438.53506478 535.26142845 -442 573 C-442.0839502 573.88510254 -442.16790039 574.77020508 -442.25439453 575.68212891 C-448.13731395 643.31991626 -432.68421479 710.81552726 -402 771 C-400.8123058 767.43691739 -401.26489558 766.48952691 -402.44140625 763.00390625 C-402.77503174 761.98458008 -403.10865723 760.96525391 -403.45239258 759.91503906 C-404.00189575 758.25553223 -404.00189575 758.25553223 -404.5625 756.5625 C-432.28066653 669.59256894 -424.0815934 569.22081836 -382.99169922 487.89428711 C-372.88020585 468.33058853 -360.96974168 450.42154521 -346.03515625 434.22265625 C-344.19352366 432.21135309 -342.4391381 430.15180328 -340.6875 428.0625 C-327.38841258 412.91547561 -310.51122519 400.78637525 -293 391 C-292.4107373 390.66162109 -291.82147461 390.32324219 -291.21435547 389.97460938 C-273.48343663 379.8037615 -254.83972099 373.64993461 -235 369 C-233.72125 368.68160156 -232.4425 368.36320312 -231.125 368.03515625 C-218.9518677 365.25470217 -206.42909374 364.78661575 -194 364 C-195.18142578 364.87398438 -195.18142578 364.87398438 -196.38671875 365.765625 C-204.75118635 372.02989517 -212.47036536 378.7606591 -220 386 C-220.82032715 386.77947998 -220.82032715 386.77947998 -221.65722656 387.57470703 C-229.94263398 395.47333236 -237.15534149 403.83418156 -244 413 C-244.70769531 413.92425781 -245.41539062 414.84851563 -246.14453125 415.80078125 C-264.90025833 440.77142381 -277.38050806 470.23563887 -284.25 500.5625 C-284.49621094 501.63717529 -284.74242187 502.71185059 -284.99609375 503.8190918 C-288.45937154 519.72553445 -289.38104167 535.33388482 -289.3125 551.5625 C-289.31034485 552.48442139 -289.3081897 553.40634277 -289.30596924 554.35620117 C-289.2520996 568.75091684 -288.73231049 582.82861424 -286 597 C-285.80664062 598.01803711 -285.61328125 599.03607422 -285.4140625 600.08496094 C-277.506881 640.31640754 -260.87464868 679.03464322 -235 711 C-234.51756836 711.5966748 -234.03513672 712.19334961 -233.53808594 712.80810547 C-228.52430334 718.95985151 -223.3375495 724.8469723 -217.62890625 730.37109375 C-216 732 -216 732 -214 734.5625 C-211.03893455 738.17129851 -207.58414015 741.02139951 -204 744 C-203.49065918 744.42700195 -202.98131836 744.85400391 -202.45654297 745.29394531 C-186.80490957 758.35593655 -170.21399317 768.87281052 -152 778 C-151.34 777.67 -150.68 777.34 -150 777 C-150.47195801 776.6690332 -150.94391602 776.33806641 -151.43017578 775.99707031 C-162.0935306 768.48853891 -172.32527883 760.74907839 -182 752 C-182.62535645 751.43635742 -183.25071289 750.87271484 -183.89501953 750.29199219 C-197.48360841 737.98444807 -209.16546372 724.78098233 -220 710 C-220.43812012 709.40799805 -220.87624023 708.81599609 -221.32763672 708.20605469 C-244.90753301 675.9742726 -257.77717481 637.24908614 -263 598 C-263.103125 597.2577417 -263.20625 596.5154834 -263.3125 595.75073242 C-264.36836107 586.98425737 -264.24384725 578.12907596 -264.25 569.3125 C-264.25067474 568.44351074 -264.25134949 567.57452148 -264.25204468 566.67919922 C-264.23508332 552.90467771 -263.56544735 539.56349721 -261 526 C-260.83902832 525.09572266 -260.67805664 524.19144531 -260.51220703 523.25976562 C-252.37292702 478.31780453 -231.89932811 436.01860254 -201.08984375 402.3125 C-199.31643159 400.35014486 -197.61849755 398.35338591 -195.9375 396.3125 C-192.64074752 392.44981998 -188.88064865 389.26027285 -185 386 C-183.73929687 384.89011719 -183.73929687 384.89011719 -182.453125 383.7578125 C-156.76336779 361.54539812 -125.34041591 346.40477574 -92 340 C-90.90558594 339.78859375 -89.81117188 339.5771875 -88.68359375 339.359375 C-50.27038714 332.49111328 -11.34757764 338.90930154 25 352 C23.07414063 351.67515625 23.07414063 351.67515625 21.109375 351.34375 C-17.71524592 345.09832391 -54.5422652 352.3759764 -87 375 C-90.46251888 377.53320523 -93.76197267 380.18672242 -97 383 C-98.24330078 384.07894531 -98.24330078 384.07894531 -99.51171875 385.1796875 C-102.04167534 387.41906714 -104.52898016 389.69583359 -107 392 C-108.10988281 393.02867187 -108.10988281 393.02867187 -109.2421875 394.078125 C-147.9554772 431.27594784 -169.96292265 491.14222539 -171.2638092 544.10362244 C-171.32674658 548.23616384 -171.33098557 552.36709227 -171.3125 556.5 C-171.31034485 557.37262482 -171.3081897 558.24524963 -171.30596924 559.14431763 C-171.16250938 595.50475657 -163.79302754 630.17954737 -148 663 C-147.65598145 663.71542969 -147.31196289 664.43085937 -146.95751953 665.16796875 C-136.88716 685.78755806 -122.65635672 703.36212856 -107 720 C-106.38382812 720.65871094 -105.76765625 721.31742188 -105.1328125 721.99609375 C-100.16172029 727.14557444 -94.60003985 731.55783575 -89 736 C-87.99839844 736.80695312 -86.99679687 737.61390625 -85.96484375 738.4453125 C-40.49291238 774.65325535 16.28887216 790.6083543 73 798 C74.00546875 798.13422363 75.0109375 798.26844727 76.046875 798.40673828 C142.19877561 806.80566709 213.9231916 796.28553806 275.5625 771.625 C276.22600464 771.36015808 276.88950928 771.09531616 277.57312012 770.82244873 C284.82320528 768.27408954 284.82320528 768.27408954 291 764 C285.74738225 764.67136451 280.67189715 765.69733962 275.5234375 766.92578125 C273.87780768 767.31234799 272.23213552 767.69873454 270.58642578 768.08496094 C269.73534241 768.28569214 268.88425903 768.48642334 268.00738525 768.6932373 C253.39848044 772.12994922 238.81174571 775.5478925 224 778 C222.84032715 778.1954541 221.6806543 778.3909082 220.48583984 778.59228516 C186.99224348 784.16822929 152.98812219 787.63040321 119 787 C118.12408203 786.98743164 117.24816406 786.97486328 116.34570312 786.96191406 C47.52162493 785.78522885 -22.86855772 768.45559568 -74.6875 721.08984375 C-76.64985514 719.31643159 -78.64661409 717.61849755 -80.6875 715.9375 C-89.6430335 708.26428308 -96.62327269 698.14561095 -104 689 C-101.33028677 689.88990441 -99.50161975 690.82952236 -97.140625 692.30078125 C-96.36702637 692.77717041 -95.59342773 693.25355957 -94.79638672 693.74438477 C-93.9560791 694.26186279 -93.11577148 694.77934082 -92.25 695.3125 C-53.46755205 718.79723076 -11.27000242 734.56159411 33 744 C34.58554688 744.34901367 34.58554688 744.34901367 36.203125 744.70507812 C125.62973185 764.2254382 219.24497737 754.37771786 308.6484375 727.63671875 C309.391577 727.41510574 310.13471649 727.19349274 310.90037537 726.96516418 C320.09124197 724.52235735 320.09124197 724.52235735 326.8125 718.4375 C327.29847656 717.63957031 327.78445313 716.84164062 328.28515625 716.01953125 C328.85105469 715.02308594 329.41695312 714.02664063 330 713 C330.35433105 712.3817334 330.70866211 711.7634668 331.07373047 711.12646484 C333.67050651 706.58075485 336.19717736 701.99953028 338.69433594 697.3984375 C339.9328063 695.12343135 341.1881531 692.85846331 342.4453125 690.59375 C374.81009783 631.54301255 392.32956286 561.22117446 394 494 C394.02191406 493.17419434 394.04382813 492.34838867 394.06640625 491.49755859 C396.15950131 398.23273134 369.23493875 305.36651107 269 167 C266.89226625 164.87101179 264.76660341 162.76289243 262.62890625 160.6640625 C261 159 261 159 259 156.4375 C256.71664703 153.65466356 254.1943021 151.47652819 251.4609375 149.14453125 C249.04399073 147.03833478 246.69771975 144.87353773 244.35644531 142.68432617 C238.10827669 136.8465478 231.70586921 131.31200033 225 126 C223.75383971 124.98836321 222.50775101 123.97663823 221.26171875 122.96484375 C201.51616547 107.10373787 180.0284385 93.45045497 158 81 C157.33709961 80.62230469 156.67419922 80.24460938 155.99121094 79.85546875 C65.90580937 28.86913655 -45.85720324 13.334835 -250 66 Z "
        transform="translate(544,3)"
      />
      <path
        d="M0 0 C8.91 0 17.82 0 27 0 C28.27875 1.588125 29.5575 3.17625 30.875 4.8125 C34.14703748 8.81792519 37.49553965 12.693431 41 16.5 C45.11132641 20.96717537 48.96689278 25.58417218 52.77734375 30.30859375 C55.68954494 33.83496742 58.77140261 37.19067711 61.85546875 40.56640625 C64.60297982 43.68425579 67.11143616 46.95131719 69.58984375 50.28515625 C70.90574128 52.12236873 70.90574128 52.12236873 73 53 C73 35.51 73 18.02 73 0 C79.6 0 86.2 0 93 0 C93 24.42 93 48.84 93 74 C84.42 74 75.84 74 67 74 C60.82976836 67.36114317 54.86508479 60.70966047 49.1796875 53.6484375 C47.02242601 51.02724881 44.78689 48.50845719 42.5 46 C38.64522278 41.769801 35.00923359 37.40140104 31.43359375 32.93359375 C28.06002588 28.86690118 24.51039119 24.94919009 21 21 C20.67 38.49 20.34 55.98 20 74 C13.4 74 6.8 74 0 74 C0 49.58 0 25.16 0 0 Z "
        transform="translate(704,481)"
      />
      <path
        d="M0 0 C8.58 0 17.16 0 26 0 C32.52759649 6.97777556 38.87088963 13.93564817 44.85546875 21.38671875 C46.99874956 23.99847623 49.2238033 26.50365302 51.5 29 C55.41492112 33.29753121 59.11465828 37.73551753 62.76171875 42.26171875 C65.45261074 45.55371751 68.23293828 48.77176132 71 52 C71.33 34.84 71.66 17.68 72 0 C78.6 0 85.2 0 92 0 C92 24.42 92 48.84 92 74 C83.42 74 74.84 74 66 74 C64.700625 72.39125 63.40125 70.7825 62.0625 69.125 C58.95943116 65.32750418 55.80471023 61.62527295 52.5 58 C48.58108748 53.70008209 44.90829131 49.24080453 41.25 44.71875 C39.06498431 42.07852271 36.80828609 39.5327028 34.5 37 C29.83187013 31.81318904 25.41882225 26.40078275 21 21 C20.67 38.49 20.34 55.98 20 74 C13.4 74 6.8 74 0 74 C0 49.58 0 25.16 0 0 Z "
        transform="translate(807,481)"
      />
      <path
        d="M0 0 C7.73024132 6.4214174 14.23540411 14.28789215 15.25 24.6875 C16.05585083 35.88882652 13.3652294 44.93677949 6.25 53.6875 C-3.98021682 64.99320115 -19.89060516 68.80182375 -34.54150391 69.61303711 C-50.98012562 70.17605698 -68.13155579 66.88578721 -80.75 55.6875 C-87.84384883 48.17907559 -91.88970221 39.05650819 -91.75 28.6875 C-90.69966902 17.11770024 -86.37745579 8.51611729 -77.75 0.6875 C-56.69195827 -14.10561031 -21.08112174 -15.67930353 0 0 Z M-65.5625 15.4375 C-69.89518768 20.70487985 -71.04606314 25.44419974 -70.6875 32.1875 C-69.66838525 38.91597351 -66.26000068 43.72836989 -61.0625 48 C-50.724914 55.01274319 -37.4625023 55.33273499 -25.4609375 53.06640625 C-18.14842601 50.74906106 -11.60592518 46.31355133 -7.52734375 39.70703125 C-5.06650135 33.97269617 -4.65547605 28.03694599 -6.59375 22.10546875 C-10.02441493 14.37488257 -15.04247181 10.03722078 -22.8125 6.875 C-37.32849385 2.07399036 -54.72996886 4.09441924 -65.5625 15.4375 Z "
        transform="translate(486.75,488.3125)"
      />
      <path
        d="M0 0 C1.40306325 1.15239998 2.7405123 2.38410376 4.05859375 3.6328125 C2.49217624 7.94046065 0.37523219 11.69452714 -1.94140625 15.6328125 C-2.49183594 15.354375 -3.04226563 15.0759375 -3.609375 14.7890625 C-6.14177822 13.53346559 -8.68978953 12.32238857 -11.25390625 11.1328125 C-12.15753906 10.71 -13.06117188 10.2871875 -13.9921875 9.8515625 C-20.57608549 7.13079936 -26.34212254 6.29236658 -33.37890625 6.3203125 C-34.18650391 6.30419922 -34.99410156 6.28808594 -35.82617188 6.27148438 C-41.52391844 6.26689312 -45.74502559 7.26768243 -50.94140625 9.6328125 C-53.22869359 11.47165131 -53.22869359 11.47165131 -53.06640625 14.2578125 C-53.02515625 15.0415625 -52.98390625 15.8253125 -52.94140625 16.6328125 C-48.77402947 19.57449023 -44.76751294 20.42320938 -39.81640625 21.1328125 C-39.03450928 21.255354 -38.2526123 21.37789551 -37.44702148 21.50415039 C-33.27695689 22.1540252 -29.1001205 22.75309428 -24.921875 23.34765625 C-2.04827042 26.66430635 -2.04827042 26.66430635 7.05859375 34.6328125 C10.84227452 39.75908967 10.96640773 45.49633914 10.05859375 51.6328125 C7.69469476 58.01315098 2.86959017 62.32486353 -2.94140625 65.6328125 C-20.17928184 73.29681117 -42.26736897 73.15222377 -59.94140625 66.6328125 C-67.18065513 63.66081238 -73.5717376 60.26823526 -77.94140625 53.6328125 C-75.30140625 50.0028125 -72.66140625 46.3728125 -69.94140625 42.6328125 C-68.39453125 43.6846875 -66.84765625 44.7365625 -65.25390625 45.8203125 C-54.43743265 52.7187879 -43.86677396 55.80468342 -31.19140625 55.9453125 C-30.33546875 55.97431641 -29.47953125 56.00332031 -28.59765625 56.03320312 C-22.20545916 56.09615658 -17.55870941 54.650365 -11.94140625 51.6328125 C-11.61140625 49.9828125 -11.28140625 48.3328125 -10.94140625 46.6328125 C-13.99784248 43.07642344 -16.27349286 41.94846058 -20.83984375 41.00390625 C-21.99323242 40.76526855 -23.14662109 40.52663086 -24.33496094 40.28076172 C-31.19730672 39.04784365 -38.09582093 38.1340543 -45.01171875 37.25976562 C-54.80299946 35.91795594 -64.96587337 34.13151034 -71.94140625 26.6328125 C-74.60734144 21.83412915 -75.52667872 18.09535557 -74.94140625 12.6328125 C-72.55772671 5.48177387 -69.15567338 0.61388127 -62.62890625 -3.0546875 C-44.50718866 -11.40198684 -16.64909328 -11.72471358 0 0 Z "
        transform="translate(585.94140625,486.3671875)"
      />
      <path
        d="M0 0 C6.6 0 13.2 0 20 0 C20.33 8.91 20.66 17.82 21 27 C36.51 27 52.02 27 68 27 C68.33 18.09 68.66 9.18 69 0 C75.93 0 82.86 0 90 0 C90 24.42 90 48.84 90 74 C83.07 74 76.14 74 69 74 C68.67 63.77 68.34 53.54 68 43 C52.49 43 36.98 43 21 43 C20.67 53.23 20.34 63.46 20 74 C13.4 74 6.8 74 0 74 C0 49.58 0 25.16 0 0 Z "
        transform="translate(604,481)"
      />
    </svg>
  );
}

export default Logo;
