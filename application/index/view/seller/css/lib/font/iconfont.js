;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shijian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.998465 0.023536C229.227934 0.023536 0.004093 229.242078 0.004093 512c0 282.758945 229.224864 511.975441 511.994372 511.975441 282.769508 0 511.997442-229.216495 511.997442-511.975441C1023.995907 229.242078 794.767973 0.023536 511.998465 0.023536zM511.998465 977.433428c-257.066073 0-465.451475-208.398354-465.451475-465.432405 0-257.0801 208.385402-465.432405 465.451475-465.432405 257.066073 0 465.451475 208.354352 465.451475 465.432405C977.44994 769.033028 769.064538 977.433428 511.998465 977.433428zM767.997186 512.002047 535.269401 512.002047 535.269401 209.469756c0-12.861936-10.428941-23.271006-23.270936-23.271006-12.839949 0-23.272983 10.408047-23.272983 23.271006L488.725482 535.271006c0 12.841469 10.433034 23.27203 23.272983 23.27203l255.998721 0c12.839949 0 23.272983-10.43056 23.272983-23.27203C791.268122 522.411117 780.837135 512.002047 767.997186 512.002047z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tixian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M62.389444 451.341478l0 421.055708c0 49.27117 40.263006 89.212858 89.922009 89.212858l719.376071 0c49.659003 0 89.922009-39.940664 89.922009-89.212858L961.609533 451.341478c0-49.27117-40.263006-89.211834-89.922009-89.211834L661.869844 362.129644l0 59.948347 163.364695 0c42.209334 0 76.42767 33.948183 76.42767 75.828013l0 327.928704c0 41.879829-41.712007 75.828013-83.921341 75.828013L198.765461 901.662721c-42.210357 0-76.428693-33.948183-76.428693-75.828013l0-327.928704c0-41.879829 34.218336-75.828013 76.428693-75.828013l163.363671 0 0-59.948347L152.311453 362.129644C102.651426 362.129644 62.389444 402.070308 62.389444 451.341478zM659.249157 257.221316l33.267685 0c33.106002 0 40.936341-18.938328 17.475-42.304502L556.828486 62.388932l-89.659019 0L314.07979 214.908628c-23.461341 23.373337-15.631002 42.312688 17.475 42.312688l33.194006 0 117.276007-116.822682 0 536.458041c0 16.554024 13.421684 29.974685 29.974685 29.974685s29.973662-13.420661 29.973662-29.974685l0-536.458041L659.249157 257.221316z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M767.707334 519.450692 308.065819 71.476915 256.054235 122.209366 663.627884 519.419993 256.085958 916.629597 308.060703 967.363072Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M918.823566 770.898515c-44.684712-119.774921-138.731668-214.258829-253.81166-259.008009 56.102762-46.12962 92.096535-116.963898 92.096535-196.261942 0-138.67027-110.030999-251.494894-245.265006-251.494894S266.577405 176.957271 266.577405 315.627541c0 79.230506 35.932374 150.010549 91.952248 196.142216C242.676042 556.425815 149.871379 650.238434 104.863303 770.898515l-1.793856 4.826935 0 98.775654c0 22.403243 8.514931 43.454698 23.937179 59.255569 15.434527 15.842827 35.966143 24.574698 57.8168 24.574698l654.040017 0c21.850657 0 42.382273-8.731872 57.790194-24.548092 15.44783-15.8285 23.964808-36.878932 23.964808-59.283198l0-98.775654L918.823566 770.898515zM321.080739 315.627541c0-107.860567 85.573981-195.60805 190.761672-195.60805 105.189737 0 190.761672 87.747483 190.761672 195.60805 0 107.857497-85.572958 195.60498-190.761672 195.60498C406.65472 511.23252 321.080739 423.485037 321.080739 315.627541zM866.116133 874.501104c0 7.461949-2.835581 14.475689-7.998161 19.769252-5.133927 5.265934-11.974729 8.1711-19.254529 8.1711L184.822402 902.441457c-7.278777 0-14.118556-2.905166-19.280112-8.198729-5.136997-5.265934-7.971555-12.279674-7.971555-19.741623l0-88.36249c45.886073-118.463042 144.669914-206.581985 265.165242-236.205677 27.634384 11.088546 57.687864 17.186428 89.106434 17.186428 31.405267 0 61.447491-6.092765 89.071641-17.173125 119.206986 29.446659 219.531925 118.482485 265.201058 236.192374L866.11511 874.501104z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-consult" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M630.441553 441.857477 262.760472 441.857477c-7.394411 0-13.388938 5.988388-13.388938 13.388938 0 7.40055 5.994528 13.388938 13.388938 13.388938l367.68108 0c7.394411 0 13.388938-5.988388 13.388938-13.388938C643.830491 447.845865 637.835963 441.857477 630.441553 441.857477z"  ></path>' +
    '' +
    '<path d="M576.36903 566.751998 316.825832 566.751998c-7.394411 0-13.388938 5.988388-13.388938 13.388938s5.994528 13.388938 13.388938 13.388938l259.543198 0c7.394411 0 13.388938-5.988388 13.388938-13.388938S583.76344 566.751998 576.36903 566.751998z"  ></path>' +
    '' +
    '<path d="M839.180668 166.271908l-523.564383 0c-33.688263 0-61.10059 26.961048-61.10059 60.106959l0 33.093722c0 11.087523 8.988722 20.083407 20.083407 20.083407 11.094686 0 20.083407-8.995885 20.083407-20.083407l0-33.093722c0-10.996448 9.387811-19.940145 20.933775-19.940145l523.564383 0c11.544941 0 20.933775 8.943696 20.933775 19.940145l0 321.022411c0 10.996448-9.387811 19.952424-20.933775 19.952424l-32.106232 0c-11.094686 0-20.083407 8.995885-20.083407 20.083407 0 11.087523 8.988722 20.083407 20.083407 20.083407l32.106232 0c33.688263 0 61.10059-26.974351 61.10059-60.120262L900.281257 226.378867C900.281257 193.232956 872.868931 166.271908 839.180668 166.271908z"  ></path>' +
    '' +
    '<path d="M708.382693 297.062719 184.812169 297.062719c-33.688263 0-61.09445 26.974351-61.09445 60.120262l0 321.022411c0 33.145911 27.405163 60.120262 61.09445 60.120262l171.769109 0 73.27998 110.419855c3.726881 5.609765 10.008958 8.982582 16.736173 8.982582s13.010315-3.373841 16.736173-8.982582l73.28612-110.419855 171.762969 0c14.251585 0 28.228925-5.125741 39.375799-14.44806 13.807471-11.544941 21.724791-28.190039 21.724791-45.671179L769.483282 357.182982C769.483282 324.037071 742.070956 297.062719 708.382693 297.062719zM729.316467 678.205393c0 7.597025-4.589528 12.57848-7.321756 14.866592-2.778276 2.314719-7.394411 5.085832-13.610996 5.085832L525.846356 698.157817c-6.727215 0-13.010315 3.373841-16.736173 8.982582l-62.512752 94.181009-62.505589-94.181009c-3.726881-5.609765-10.008958-8.982582-16.736173-8.982582L184.812169 698.157817c-11.538801 0-20.926612-8.956999-20.926612-19.952424L163.885558 357.182982c0-10.996448 9.387811-19.952424 20.926612-19.952424l523.570523 0c11.544941 0 20.933775 8.956999 20.933775 19.952424L729.316467 678.205393z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon1460187914536" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M360.761392 82.608309c0-9.572465-7.832761-17.405227-17.405227-17.405227L84.974306 65.203082c-9.572465 0-17.405227 7.832761-17.405227 17.405227l0 258.381859c0 9.572465 7.832761 17.405227 17.405227 17.405227l258.381859 0c9.572465 0 17.405227-7.832761 17.405227-17.405227L360.761392 82.608309zM329.892903 310.121679c0 9.572465-7.832761 17.405227-17.405227 17.405227L115.842795 327.526906c-9.572465 0-17.405227-7.832761-17.405227-17.405227L98.437568 113.476798c0-9.572465 7.832761-17.405227 17.405227-17.405227l196.644882 0c9.572465 0 17.405227 7.832761 17.405227 17.405227L329.892903 310.121679zM954.442541 82.608309c0-9.572465-7.832761-17.405227-17.405227-17.405227L678.654432 65.203082c-9.572465 0-17.405227 7.832761-17.405227 17.405227l0 258.381859c0 9.572465 7.832761 17.405227 17.405227 17.405227l258.381859 0c9.572465 0 17.405227-7.832761 17.405227-17.405227L954.441518 82.608309zM923.573029 310.121679c0 9.572465-7.832761 17.405227-17.405227 17.405227L709.523944 327.526906c-9.572465 0-17.405227-7.832761-17.405227-17.405227L692.118717 113.476798c0-9.572465 7.832761-17.405227 17.405227-17.405227l196.644882 0c9.572465 0 17.405227 7.832761 17.405227 17.405227L923.574052 310.121679zM67.569079 944.185451c0 9.572465 7.832761 17.405227 17.405227 17.405227l258.381859 0c9.572465 0 17.405227-7.832761 17.405227-17.405227L360.761392 685.804615c0-9.572465-7.832761-17.405227-17.405227-17.405227L84.974306 668.399388c-9.572465 0-17.405227 7.832761-17.405227 17.405227L67.569079 944.185451zM98.438592 716.672081c0-9.572465 7.832761-17.405227 17.405227-17.405227l196.644882 0c9.572465 0 17.405227 7.832761 17.405227 17.405227l0 196.645905c0 9.572465-7.832761 17.405227-17.405227 17.405227L115.842795 930.723212c-9.572465 0-17.405227-7.832761-17.405227-17.405227L98.437568 716.672081zM72.769771 508.953471c0-8.488732 7.832761-15.434244 17.405227-15.434244l848.806692 0c9.572465 0 17.405227 6.945512 17.405227 15.434244 0 8.488732-7.832761 15.434244-17.405227 15.434244L90.173974 524.387716C80.601509 524.387716 72.769771 517.442203 72.769771 508.953471zM495.572078 82.632869c0-9.572465 6.945512-17.405227 15.434244-17.405227 8.488732 0 15.434244 7.832761 15.434244 17.405227l0 258.336832c0 9.572465-6.945512 17.405227-15.434244 17.405227-8.488732 0-15.434244-7.832761-15.434244-17.405227L495.572078 82.632869zM492.595137 746.6349c0-8.488732 7.832761-15.434244 17.405227-15.434244l425.405722 0c9.572465 0 17.405227 6.945512 17.405227 15.434244 0 8.488732-7.832761 15.434244-17.405227 15.434244L510.000364 762.069144C500.427898 762.069144 492.595137 755.123632 492.595137 746.6349zM501.802265 944.526228c0-8.488732 7.832761-15.434244 17.405227-15.434244l406.993514 0c9.572465 0 17.405227 6.945512 17.405227 15.434244 0 8.488732-7.832761 15.433221-17.405227 15.433221L519.207491 959.95945C509.635026 959.960473 501.802265 953.014961 501.802265 944.526228zM501.802265 929.093007"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiaoyi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M51.792952 931.522664c-17.829902 0-32.331977-14.495994-32.331977-32.329544L19.460975 122.013014c0-17.839632 14.500859-32.345356 32.331977-32.345356 17.839632 0 32.345356 14.505724 32.345356 32.345356l0 744.843265L971.528347 866.856278c17.834767 0 32.331977 14.502075 32.331977 32.336842 0 17.833551-14.49721 32.329544-32.331977 32.329544L51.792952 931.522664 51.792952 931.522664 51.792952 931.522664zM156.530701 756.847037c-7.012032 0-13.704175-2.228282-19.345425-6.445232-14.280707-10.693806-17.204718-31.001333-6.51821-45.279607L342.76858 421.754595c6.175211-8.235641 15.618649-12.962225 25.919586-12.962225 6.44888 0 12.689772 1.901094 18.036675 5.509888l190.737013 128.446082 336.104413-267.74409c5.782342-4.613467 12.738424-7.048522 20.120215-7.048522 9.911718 0 19.133787 4.439535 25.306565 12.188652 5.388257 6.748093 7.809932 15.196589 6.851479 23.786176-0.970616 8.573776-5.227704 16.270591-11.985528 21.658849L599.210709 608.10924c-5.683821 4.54657-12.835729 7.043657-20.146974 7.043657-6.458611 0-12.704368-1.904743-18.059785-5.508672L376.118609 485.141422 182.451503 743.875081C176.284807 752.116804 166.832855 756.847037 156.530701 756.847037L156.530701 756.847037 156.530701 756.847037zM156.530701 756.847037"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wuyefuwu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M313.056444 793.681276l140.741777-28.159708 0-56.319216-140.741777 28.103346L313.056444 793.681276zM313.056444 709.202553l140.741777-28.21587 0-56.206692-140.741777 28.103346L313.056444 709.202553zM679.018721 174.395152l-253.323846 112.638431 0 25.293051-197.060993 59.073348 0 422.225131 56.319216 0L284.953098 399.559491l197.004631-56.319216 0 450.384839 28.103346 0 84.534885 0L594.59596 315.080767l-84.534885-28.103346-65.031309 19.503776 233.988756-104.038662L679.018521 793.568952l84.478723 0L763.497245 230.714368 679.018721 174.395152zM313.056444 596.620483l140.741777-28.21587 0-56.206692-140.741777 28.103346L313.056444 596.620483zM313.056444 483.982052l140.741777-28.103346 0-56.263054-140.741777 28.103346L313.056444 483.982052zM510.566932 64.904387c-246.860029 0-447.012326 200.152297-447.012326 447.068488 0 246.972553 200.152297 447.124849 447.012326 447.124849 246.972553 0 447.068687-200.152297 447.068687-447.124849C957.635619 265.056684 757.539484 64.904387 510.566932 64.904387zM510.566932 931.05054c-231.45947 0-419.077665-187.618195-419.077665-419.133827 0-231.45947 187.618195-419.077665 419.077665-419.077665 231.515632 0 419.133827 187.618195 419.133827 419.077665C929.700759 743.432345 742.082764 931.05054 510.566932 931.05054z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M83.455225 527.539928c-12.69309 0-17.857716-5.252631-17.857716-17.928325 0-247.14482 201.045899-448.208115 448.13853-448.208115 167.289074 0 319.470055 92.128257 397.191184 240.439094 5.880941 11.239995 1.539053 25.14161-9.665127 31.024597-11.275811 5.901407-25.160029 1.541099-31.04097-9.6815-69.75469-133.132136-206.351742-215.805044-356.484064-215.805044-221.75864 0-402.179802 180.438559-402.179802 402.230967C111.556237 522.287297 96.148315 527.539928 83.455225 527.539928L83.455225 527.539928zM83.455225 527.539928"  ></path>' +
    '' +
    '<path d="M513.735016 957.819718c-149.117203 0-288.026926-73.882708-371.57476-197.614753-7.090489-10.522658-4.341888-24.806989 6.198166-31.899524 10.522658-7.089465 24.826432-4.324492 31.899524 6.180769 74.986855 111.070678 199.663412 177.357384 333.478094 177.357384 218.851427 0 399.273612-178.023556 402.142963-396.821771l0.034792-5.41022c0-12.69309 15.408945-17.928325 28.102035-17.928325 12.675694 0 17.856693 5.234211 17.856693 17.928325l-0.053212 5.989411C958.599989 759.452835 757.606279 957.819718 513.735016 957.819718L513.735016 957.819718zM513.735016 957.819718"  ></path>' +
    '' +
    '<path d="M592.119247 552.402175c-6.197142 0-12.360516-2.486634-16.877389-7.370875L435.561585 393.813251 302.044686 524.792351c-4.27128 4.183276-15.406898 2.695389-21.37789 2.747577L83.455225 527.539928l0 0c-12.623505 0-17.788132-5.759167-17.857716-18.400069-0.070608-12.69309 5.164626-17.385972 17.857716-17.455557l197.211571 0L420.329672 344.335373c4.411473-4.341888 10.995425-6.617721 16.650215-6.513344 6.215562 0.140193 12.115945 2.819209 16.300244 7.388271l155.734924 168.604022c8.632611 9.331529 8.037047 23.880897-1.278109 32.459273C603.289658 550.370913 597.686033 552.402175 592.119247 552.402175L592.119247 552.402175zM592.119247 552.402175"  ></path>' +
    '' +
    '<path d="M573.350788 678.005848c-5.952572 0-11.871375-2.311649-16.388249-6.898107L391.581931 503.028675c-8.894577-9.051143-8.771781-23.600511 0.279363-32.494065 9.03477-8.894577 23.600511-8.789177 32.495088 0.279363l149.344377 151.777799 119.318526-112.980167c4.324492-4.219091 30.341029-17.034978 35.856649-17.928325l215.139895 0c12.69309 0.069585 17.928325 4.744048 17.856693 17.438161-0.053212 12.640901-10.345626 22.236444-22.986527 22.236444l5.129834-3.817955-215.139895 0L589.388043 671.177326C584.905962 675.519214 579.128375 678.005848 573.350788 678.005848L573.350788 678.005848zM573.350788 678.005848"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-offline" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.680499 960.682929c-247.298316 0-447.768093-200.470801-447.768093-447.768093s200.469777-447.768093 447.768093-447.768093 447.768093 200.470801 447.768093 447.768093S759.978814 960.682929 512.680499 960.682929zM512.680499 79.142501c-239.180428 0-433.772334 194.590883-433.772334 433.772334s194.591907 433.772334 433.772334 433.772334 433.772334-194.590883 433.772334-433.772334S751.860926 79.142501 512.680499 79.142501z"  ></path>' +
    '' +
    '<path d="M338.487178 512.913812m-48.387034 0a47.285 47.285 0 1 0 96.774067 0 47.285 47.285 0 1 0-96.774067 0Z"  ></path>' +
    '' +
    '<path d="M512.680499 512.913812m-48.387034 0a47.285 47.285 0 1 0 96.774067 0 47.285 47.285 0 1 0-96.774067 0Z"  ></path>' +
    '' +
    '<path d="M686.872796 512.913812m-48.387034 0a47.285 47.285 0 1 0 96.774067 0 47.285 47.285 0 1 0-96.774067 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liuliang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M662.016 292.864l0 179.712c33.28-15.36 70.144-24.064 109.056-24.064L771.072 86.016l-128 0-225.792 522.24-3.584 0-226.816-522.24-128 0 0 665.6L168.96 751.616 168.96 292.864l3.584 0L368.64 751.616l94.208 0 195.584-458.752L662.016 292.864z"  ></path>' +
    '' +
    '<path d="M772.096 503.296c-115.712 0-209.92 93.696-209.92 209.92 0 115.2 92.672 208.384 207.36 209.92 1.024 0 1.536 0 2.56 0 0 0 0 0 0 0 0 0 0 0 0 0 115.712 0 209.92-93.696 209.92-209.92C981.504 596.992 887.808 503.296 772.096 503.296L772.096 503.296zM641.536 608.256l1.536 0c-0.512 0.512-1.024 1.024-1.536 1.536L641.536 608.256 641.536 608.256zM876.032 726.016c-5.632 0-10.752-3.584-12.288-9.216l-11.264-33.792-41.984 176.64c-1.536 6.144-6.656 10.24-12.8 10.24-0.512 0-0.512 0-1.024 0-6.656-0.512-11.776-5.632-12.288-11.776l-18.944-202.752-33.792 138.752c-1.536 6.144-6.656 10.24-13.312 10.24-6.144 0-11.776-4.608-12.8-10.752l-17.408-105.472-9.728 28.672c-1.536 5.12-6.656 8.704-12.288 9.216l-52.224 0 0-26.112 42.496 0 23.04-69.632c2.048-5.632 7.68-9.216 13.312-8.704 6.144 0.512 10.752 5.12 11.776 10.752l15.36 90.624 37.888-157.184c1.536-6.144 7.168-10.752 13.824-10.24 6.656 0.512 11.776 5.632 12.288 11.776l18.944 202.752 33.792-138.752c1.024-5.632 6.144-9.728 12.288-10.24 5.632-0.512 11.264 3.584 13.312 8.704l23.04 69.632 43.52 0 0 26.112L876.032 725.504 876.032 726.016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shuidian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M503.808 1022.976c-245.248-0.512-445.44-195.584-445.44-434.688 0.512-56.32 23.04-119.808 69.632-195.072 36.352-57.856 87.04-121.856 150.528-188.928 99.84-105.984 198.656-186.368 217.6-201.216l0.512-0.512c2.56-2.048 5.632-2.56 7.68-2.56 2.048 0 4.608 0.512 7.168 2.56 0.512 0.512 1.536 1.024 2.56 2.048 58.368 47.104 256.512 214.528 366.08 388.608 46.592 74.752 69.12 138.752 69.632 195.072-0.512 239.104-200.192 434.176-445.952 434.688z m-13.824-983.552c-5.12 4.096-11.264 9.216-17.92 15.36-22.016 18.944-56.832 49.152-96.768 87.04-69.12 65.536-164.352 164.864-226.816 264.704-30.208 48.128-66.048 118.784-66.048 182.272 0.512 225.792 189.44 410.112 420.864 410.112 231.936 0 420.864-183.808 420.864-410.112 2.048-113.664-120.32-264.192-173.056-323.072-91.136-103.936-194.048-192.512-233.472-225.28l-13.824-11.776-13.824 10.752z"  ></path>' +
    '' +
    '<path d="M726.016 499.712c-1.536-3.072-4.608-5.12-8.192-5.12h-193.024l38.4-193.024c1.024-4.096-1.536-8.192-5.12-9.728-1.024-0.512-2.56-1.024-3.584-1.024-2.56 0-5.12 1.024-7.168 3.072l-264.704 325.632c-2.048 2.56-2.56 6.656-1.024 9.728 1.536 3.072 4.608 5.12 8.192 5.12h192.512l-38.4 193.024c-1.024 4.096 1.024 8.192 5.12 9.728 1.024 0.512 2.56 1.024 3.584 1.024 2.56 0 5.12-1.024 7.168-3.072l264.704-325.632c2.56-2.56 3.072-6.144 1.536-9.728z m-219.648 250.368l-39.936 51.712 14.336-64.512 22.016-110.08c0.512-2.56 0-5.632-2.048-7.68-1.536-2.048-4.096-3.072-6.656-3.072h-184.832l200.704-246.784 30.72-44.032-10.24 53.248-0.512 1.536-24.064 120.832c-0.512 2.56 0 5.12 2.048 7.68 1.536 2.048 4.096 3.072 6.656 3.072h184.832l-193.024 238.08zM529.408 380.928z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenrun" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 35.84C249.4464 35.84 35.84 249.4464 35.84 512c0 40.3968 5.41184 81.65376 16.53248 126.14656l0.26112 0.78848c4.5056 11.27424 14.8224 18.56 26.27072 18.56 1.72032 0 3.456-0.17408 5.15072-0.51712 14.42304-2.8928 21.65248-19.05152 19.08736-31.86688-9.52832-42.87488-14.16192-79.87712-14.16192-113.11616 0-233.25696 189.76256-423.02464 423.02464-423.02464 233.25696 0 423.02464 189.76768 423.02464 423.02464 0 233.26208-189.76768 423.02464-423.02464 423.02464-128.21504 0-247.89504-56.52992-328.20224-154.9056-4.49024-5.98528-12.31872-9.69728-20.4288-9.69728-6.56896 0-12.63104 2.37056-17.11616 6.69696-5.30432 4.15232-8.76032 10.93632-9.28256 18.24256-0.51712 7.24992 1.93024 14.19776 6.72256 19.1232C235.42272 924.86144 369.65376 988.16 512 988.16c262.5536 0 476.16-213.6064 476.16-476.16S774.5536 35.84 512 35.84z"  ></path>' +
    '' +
    '<path d="M348.50816 567.17824c-15.6416 0-26.56256 10.92608-26.56256 26.56256 0 15.65184 10.92608 26.5728 26.56256 26.5728h136.92416v75.61216c0 15.6416 10.92608 26.56256 26.56256 26.56256s26.56256-10.92608 26.56256-26.56256v-75.61216h136.92416c15.6416 0 26.56256-10.92608 26.56256-26.5728 0-15.63648-10.92608-26.56256-26.56256-26.56256h-136.92416V497.69472h136.92416c15.6416 0 26.56256-10.92608 26.56256-26.56768s-10.92608-26.56256-26.56256-26.56256h-91.74528l82.33984-106.6752c4.50048-6.00064 6.38464-14.40256 4.91008-21.93408-1.29024-6.58432-5.00224-12.0576-10.4704-15.44704-4.5568-3.32288-10.53696-5.22752-16.45056-5.22752-8.82176 0-16.32768 3.97824-20.64896 10.92608l-106.27584 138.35264h-10.30144L400.41984 306.00704c-4.67456-6.23616-13.056-10.10688-21.8624-10.10688-5.77024 0-11.2128 1.69984-15.3344 4.79232-5.19168 3.89632-8.76032 10.30144-9.79968 17.58208-1.03424 7.28064 0.59904 14.42816 4.54144 19.6864l82.28864 106.60352H348.50816c-15.6416 0-26.56256 10.92608-26.56256 26.56256 0 15.64672 10.92608 26.56768 26.56256 26.56768h136.92416v69.48352H348.50816z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-guanggao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M91.091 761.792h411.472v175.617c0 12.011 9.734 21.744 21.745 21.744 12.012 0 21.745-9.733 21.745-21.744V761.792h386.91c12.79 0 23.143-10.373 23.143-23.144 0-12.791-10.373-23.144-23.144-23.144H91.092c-12.792 0-23.144 10.373-23.144 23.144 0 12.79 10.372 23.144 23.143 23.144zM900.585 234.46c0-92.016-74.508-169.602-166.524-169.602H289.992c-92.015 0-166.523 77.566-166.523 169.602v416.308h777.116V234.461z m-43.23 373.099H166.7V231.403c0-61.237 55.84-120.236 117.157-120.236H737.14c61.237 0 120.236 61.977 120.236 123.294V607.56z"  ></path>' +
    '' +
    '<path d="M376.824 238.118L282.477 482.99h39.806l23.024-63.137h105.296l23.024 63.137h40.113l-94.45-244.872h-42.466z m-20.26 150.832l40.828-110.821h1.33l40.523 110.821h-82.682zM626.812 238.118h-89.23V482.99h88.514c39.397 0 69.276-10.95 89.844-32.95 19.545-21.284 29.471-51.062 29.471-89.537 0-38.783-9.619-68.56-28.857-89.23-20.465-22.206-50.243-33.155-89.742-33.155z m60.681 190.638c-14.428 14.735-37.35 22.307-68.253 22.307h-44.206v-181.12h44.922c30.904 0 53.518 7.162 67.946 22 13.712 14.428 20.875 37.043 20.875 68.56 0 30.903-7.163 53.518-21.284 68.253z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziliao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M407.0912 594.07872c83.75296-34.61632 143.34976-121.04704 143.34976-222.21824 0-131.53792-100.5824-238.53056-224.26112-238.53056-123.68384 0-224.26112 106.98752-224.26112 238.53056 0 101.1712 59.59168 187.60704 143.3088 222.21824-139.4432 38.4-242.90816 172.99456-242.90816 333.1584H47.0016c0-163.77856 125.2096-296.97024 279.17824-296.97024 153.96352 0 279.2192 133.23776 279.2192 296.97024h44.64128c0-160.11776-103.46496-294.7584-242.94912-333.1584zM146.60096 371.86048c0-105.33376 80.6144-191.04768 179.6608-191.04768 98.96448 0 179.57888 85.71392 179.57888 191.04768s-80.57344 191.04256-179.61984 191.04256c-99.00544-0.00512-179.61984-85.7088-179.61984-191.04256zM962.93888 933.7856h-200.77056v-43.2384h200.81664c9.97888 0 18.09408-8.62208 18.09408-19.23584V189.26592c0-10.61888-8.07424-19.24096-18.09408-19.24096H491.1872v-43.2384h471.79776c32.3584 0 58.7008 28.032 58.7008 62.4384v682.12736c0 34.40128-26.3424 62.43328-58.74688 62.43328zM586.752 269.66528h317.36832v49.2288H586.752v-49.2288z m0 153.75872h317.36832v49.22368H586.752v-49.26976 0.04608z m83.50208 163.86048h233.86624v49.26976h-233.86624v-49.26976z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)