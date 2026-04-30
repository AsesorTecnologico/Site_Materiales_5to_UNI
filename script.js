// ============================================================
// SECCIÓN DE CONFIGURACIÓN: ENLACES DE GOOGLE DRIVE
// ============================================================
// Estructura: driveLinks[grado][tomo][seccion][idCurso] = "URL"
// grados: "1ro", "2do", "3ro", "4to", "5to"
// tomos: "tomo-i", "tomo-ii", "tomo-iii", "tomo-iv", "tomo-v", "tomo-vi", "tomo-vii", "tomo-viii"
// secciones: "cap1", "cap2", "cap3", "retro" (los números de capítulos se ajustan según tomo)
// idCurso: del 1 al 20 (ver lista de cursos más abajo)
//
// INSTRUCCIONES: Reemplaza las URL de ejemplo con tus enlaces reales de Drive.
// Puedes copiar y pegar tantas líneas como necesites.
// ============================================================

const driveLinks = {
    
    // ========== 5TO PRE ==========
    "5touni": {
        "tomo-i": {
            "cap1": {
                14: "https://docs.google.com/presentation/d/1Huuy2pFAk1uSv8HcBAD6D9dG8yeicbt6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1zp_8T2NXvj-EAh587PsIJpxEjBD8KoLd/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química teo
                21: "https://docs.google.com/presentation/d/1P9ywb2JWL-1R96rlB4SeGc3HZ28xttzC/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química pract
                16: "https://docs.google.com/presentation/d/1ZujZwla8-rE0vDRthnrliN6DH-4_8-aP/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1WYCayRX5g4686bWvWmWfcLIK5eVJxZax/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=truee", // Aritmética
                18: "https://docs.google.com/presentation/d/1kyCANoxxfyU9FaYkGTx94reO2S5B1euN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/1llC9DxD1DlDnrUxcd3dD8aGbOzmnOWvw/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap2": {
                14: "https://docs.google.com/presentation/d/1zjfaPhY6h4o-Mq2YNxmEbPJ6BG8Dvevu/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1uNvCxOVumMRj8SpSwQqks2p5vtKsQ39V/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química teo
                21: "https://docs.google.com/presentation/d/1Fnjc4yieLqlLjb_ndtb4sYFFghqYId27/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química pract
                16: "https://docs.google.com/presentation/d/1RT5ss3dO2ESUT3Blx53NBN8YxV_wf4pv/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1KQIQh8F1X8pIbajOlWg0bcC3YUJRK5cs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1jCN9Y62AJxc_4eFwPe2io7wKvV9MCrN_/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/1oPB2XXt37IbCCKx0fIOqbOdmyGVgoDuY/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap3": {
                14: "https://docs.google.com/presentation/d/1hfvsNDU1b5Q8Wyu3xHqIFRqaaDnOIX1g/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1tmJCXMzA15sZrMJl-mtH8MB58INeBTJq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química teo
                21: "https://docs.google.com/presentation/d/1s1TDUsd-UxSftnVfc1oL3ht1PXqtwChZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química pract
                16: "https://docs.google.com/presentation/d/141VODR7X3hkVVsTh1IPe2pbP3hy9ldf6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/15kRKolXhqm3HP_dyl1pvDzNeLT3AU5bs/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/14UWoNYFgwx_BBjBU1U7AH0Tbc2rZcmuq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/1t9IitTQs-TEY2rHEqqxYG8MwIhAPJRTT/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap4": {
                14: "https://docs.google.com/presentation/d/1UHRl0OG-Fg7zy6P6niDVpEYd7b43tr-d/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1JTK98UJHUSnAKBR1H94KJiHH2s20oFEq/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química teo
                21: "https://docs.google.com/presentation/d/1WTwTrBiBrr_F-ZLh3UcXOVBn9fc009g1/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química pract
                16: "https://docs.google.com/presentation/d/1aqHV09QNLKRAEv106_SXVmGSGfjDFV1C/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1hJSWyR-aiYMkZNrvOSQvm19hba_9sABu/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1qlmwZlf6euDqkku-YFe3QZxHjvSwp3BM/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/1w0SbtqkFVC6YDA-PVUOdYY-dXgPW0AFe/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            }
        },
        "tomo-ii": {
            "cap5": {
                14: "https://docs.google.com/presentation/d/1_-7lk2E0oAA7gQ3NZ79SVLg8imRh_Iji/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1KgkmC0D_SVLuY7A5vMMXNw4W2nz0QCWr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1IRPzk0xV8CL3C3C4jdqmmRLXhK1xlcDF/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1gAG76V0jZ3X_yhz8f-9aTHzzDW4XPOwJ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1mIHCLw1cZBc9Xy39IUvR13vaMCpW1JTL/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/1SfI4fRaD2QIQR7dMk_pPAWVmzycBK-jp/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap6": {
                14: "https://docs.google.com/presentation/d/1imUOvOfnUHlRwZNgqg-ascKFCtc0j1Ou/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1Zc7FcYUjwlY_u1kReXuS_5f4Yy5jglgf/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1W8f-fZ8_YT3b9HgyUqFi8El9DD9dIqTN/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1fqJQVOm9hxZ4iWKESUffCH42Fzc4efqx/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1dRuIh8NoWL0C3yS8qAvxsTEb71FRe0PZ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/1tvLa1GhLmB_j0TUrc3sWlx8p8EBZE_AU/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap7": {
                14: "https://docs.google.com/presentation/d/15hF7CITkKVHydzc0yJC-AWFnRJNYc-ew/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1CGkgkCs2Qpxk9TxbDlekPihDov1N-7UQ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1-VYMhuRA56pYvIDX3HmrqtGe_rrwjPr-/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1y_83p30ClGFT4-o0YS3MzrIhDbEwzDnK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1R2GBJ6dy9C6hiZkM7lnSHZR1cbUz7ufK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/17SpuXW8ibwtHFNUD5ve6aKy6xWHPtuJ2/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap8": {
                14: "https://docs.google.com/presentation/d/1mzuOpEW-dSyxkDIgvPMHSeqVNFZRMkja/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1QczBYnO-uE0amQTkXM4HzDQp9hDH_tUb/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química
                16: "https://docs.google.com/presentation/d/1fIXTu3VRf4hdQw70ABbUYn9smBnvTZeK/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1sSsBPKQZJuqYHe72Qs_GWeZeKSNkYQFb/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1FP_jaN7TWwnjc4Eu6EKDCvt-sR6pcbhQ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/1YTm_nT2ft-9oRa_FoBbdtrhkBHA90J_z/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
                }
            },
        "tomo-iii": {
            "cap9": {
                14: "https://docs.google.com/presentation/d/1C5UsbyDn5bjV69uSAYcCqzdj1znx7VQQ/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1nFy11OEpNnuKan2bBo7jOOQ17W6Svcw5/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química teoria
                21: "https://docs.google.com/presentation/d/1vZSsZytFss1burSkykICC448B_WVs04L/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Química parctica
                16: "https://docs.google.com/presentation/d/19CGhRHLDB5drTu3ybtKNGBPxsQpCIH7y/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1xB0nuArNsQIl2KMrUlvIdWjiIo8QDiAF/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1mIRHVSa0iej4UzlXltClhEBuJeju9t58/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/1Q-YCWlONzuvksHnH7S35yc2217vAQrmA/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap10": {
                14: "https://docs.google.com/presentation/d/1NX4tQ61hEac6JU0lpTugxWM_k4zPi0cD/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1yOiuirHrbHJzSrPl1nFeNddfvdFg_qdH/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química teoria
                21: "https://docs.google.com/presentation/d/1QkIlXE6DUv3oAoNmpMla2KG4mYCSp7xR/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química practica
                16: "https://docs.google.com/presentation/d/1JF-Zqh0rMRpGNtqA3usP4MwS5dbIDjy3/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1Qd0Ys7cCraqg7zpb9Laos0lVuWp7KKfC/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1VMk6ICsf3DK43lJciX_7FKpQri_geAc6/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/1AtpYmD5pk8m0fjvvJ_Y0eSyfll2OJSr3/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap11": {
                14: "https://docs.google.com/presentation/d/1Fnw7n7t-IZ4CXR4vCnwMo87i3IuxAKMb/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1kZivHxurVaCS0rSV7pPKfgZ1Rwcgs0tt/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química teoria
                21: "https://docs.google.com/presentation/d/1D9Tj9eIvFe7dicSFppXA8AEyUWc8T5kr/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Química practica
                16: "https://docs.google.com/presentation/d/19w0xdhrSOU0t8Xt3h-9plsG_Hiwz36H_/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1W0SwWAS7uvsPkUukSJHewY51tSvqYml0/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1bXdFWn5gGzSn0-PHreCBPE_eCcgYHYTn/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/1Y-7sV5qra_NvjVNimgGcDeUNzcFj797y/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            },
            "cap12": {
                14: "https://docs.google.com/presentation/d/1igb9_-2XJ2OML5Kr3oC-ZFw6OhabPbEh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",    // Física
                15: "https://docs.google.com/presentation/d/1kxAIPGFntKC_c_REhvBhb0YraHCsFLg4/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química teoria
                21: "https://docs.google.com/presentation/d/17AoSALVTI6J9mThFAmEfs0o4o5mgat7D/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Química practica
                16: "https://docs.google.com/presentation/d/1JSnV7DYKum9abesapklBHQCQiJNdq-hS/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true",   // Álgebra
                17: "https://docs.google.com/presentation/d/1cLVu-DwDIMjUqQMUEXBu-YcjVCZ5sWOh/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Aritmética
                18: "https://docs.google.com/presentation/d/1qyjeqUPMLbsFrtsSZPJNI3qWp6u3Zb9S/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true", // Geometría
                20: "https://docs.google.com/presentation/d/17O3ncn1awuwqchv5u8SHhw1o3F2gLCF9/edit?usp=drive_link&ouid=102717800894254475874&rtpof=true&sd=true" // Trigonometría
            }
        },
        "tomo-iv": {
            "cap13": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap14": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap15": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap16": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-v": {
            "cap17": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap18": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap19": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap20": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-vi": {
            "cap21": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap22": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap23": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap24": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-vii": {
            "cap1": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap2": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap3": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap4": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
                }
            },
        "tomo-viii": {
            "cap5": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap6": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap7": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap8": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            }
            },
        "tomo-ix": {
            "cap9": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap10": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap11": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
            },
            "cap12": {
                14: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_fisica?usp=drive_link",    // Física
                15: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_quimica?usp=drive_link",   // Química
                16: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_algebra?usp=drive_link",   // Álgebra
                17: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_aritmetica?usp=drive_link", // Aritmética
                18: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_geometria?usp=drive_link", // Geometría
                20: "https://drive.google.com/drive/folders/ejemplo_1ro_tomoI_cap1_trigonometria?usp=drive_link" // Trigonometría
       }
            },
    }
};

// ============================================================
// FIN DE LA SECCIÓN DE CONFIGURACIÓN
// ============================================================

// Lista de cursos (20 asignaturas) con área y descripción
// Lista de cursos (23 asignaturas) con área y descripción
const courses = [
    // Ciencia y Tecnología
    { id: 14, name: "Física", description: "Movimiento, fuerzas, energía, ondas y electricidad.", icon: "fas fa-atom", color: "#9d4edd", area: "ciencia", availableGrades: ["5touni"] },
    { id: 15, name: "Química Teoria", description: "Elementos, compuestos, reacciones y tabla periódica.", icon: "fas fa-flask", color: "#fb5607", area: "ciencia", availableGrades: ["5touni"] },
    { id: 21, name: "Química Practica", description: "Elementos, compuestos, reacciones y tabla periódica.", icon: "fas fa-flask", color: "#fb5607", area: "ciencia", availableGrades: ["5touni"] },
    // Matemática
    { id: 16, name: "Álgebra", description: "Expresiones algebraicas, ecuaciones, funciones y polinomios.", icon: "fas fa-square-root-alt", color: "#e63946", area: "matematica", availableGrades: ["5touni"] },
    { id: 17, name: "Aritmética", description: "Números, operaciones básicas, fracciones, decimales y más.", icon: "fas fa-calculator", color: "#0a4d8c", area: "matematica", availableGrades: ["5touni"] },
    { id: 18, name: "Geometría", description: "Figuras geométricas, medición, propiedades y transformaciones.", icon: "fas fa-draw-polygon", color: "#3a86ff", area: "matematica", availableGrades: ["5touni"] },
    { id: 20, name: "Trigonometría", description: "Triángulos, funciones trigonométricas, identidades y aplicaciones.", icon: "fas fa-shapes", color: "#1d3557", area: "matematica", availableGrades: ["5touni"] }
];

// Colores por área (para el borde)
const areaColors = {
    sociales: "#e9c46a",
    comunicacion: "#f4a261",
    ciencia: "#2a9d8f",
    matematica: "#e76f51"
};

// Nombres de áreas para mostrar en badge
const areaNames = {
    sociales: "Ciencias Sociales",
    comunicacion: "Comunicación",
    ciencia: "Ciencia y Tecnología",
    matematica: "Matemática"
};

// Grados (1ro a 5to)
const grades = [
    { id: "5touni", name: "5to UNI", icon: "fas fa-star" }
];

// Tomos I al VIII
const tomos = [
    { id: "tomo-i", name: "Tomo I", icon: "fas fa-book", type: "regular" },
    { id: "tomo-ii", name: "Tomo II", icon: "fas fa-book", type: "regular" },
    { id: "tomo-iii", name: "Tomo III", icon: "fas fa-book", type: "regular" }
    /*{ id: "tomo-iv", name: "Tomo IV", icon: "fas fa-book", type: "regular" },
    { id: "tomo-v", name: "Tomo V", icon: "fas fa-book", type: "regular" },
    { id: "tomo-vi", name: "Tomo VI", icon: "fas fa-book", type: "regular" },
    { id: "tomo-vii", name: "Tomo VII", icon: "fas fa-bolt", type: "intensivo" },
    { id: "tomo-viii", name: "Tomo VIII", icon: "fas fa-bolt", type: "intensivo" },
    { id: "tomo-ix", name: "Tomo IX", icon: "fas fa-bolt", type: "intensivo" }*/
];

// Generar las secciones (capítulos + RETRO) para cada tomo
const sectionsByTomo = {};
tomos.forEach((tomo) => {
    let sections = [];
    
    if (tomo.type === "regular") {
        // Tomos regulares: numeración continua según el índice
        const regularIndex = tomos.filter(t => t.type === "regular").indexOf(tomo);
        const startChapter = regularIndex * 4 + 1; // 1,5,9,13,17,21
        sections = [
            { id: `cap${startChapter}`, name: `Capítulo ${startChapter}` },
            { id: `cap${startChapter + 1}`, name: `Capítulo ${startChapter + 1}` },
            { id: `cap${startChapter + 2}`, name: `Capítulo ${startChapter + 2}` },
            { id: `cap${startChapter + 3}`, name: `Capítulo ${startChapter + 3}` }
        ];
    } else {
        // Intensivos: numeración independiente
        const intensivoIndex = tomos.filter(t => t.type === "intensivo").indexOf(tomo);
        const startChapter = intensivoIndex * 4 + 1; // 1,5,9
        sections = [
            { id: `cap${startChapter}`, name: `Capítulo ${startChapter}` },
            { id: `cap${startChapter + 1}`, name: `Capítulo ${startChapter + 1}` },
            { id: `cap${startChapter + 2}`, name: `Capítulo ${startChapter + 2}` },
            { id: `cap${startChapter + 3}`, name: `Capítulo ${startChapter + 3}` }
        ];
    }
    
    sectionsByTomo[tomo.id] = sections;
});

// Estado actual
let currentGrade = null;
let currentTomo = null;
let currentSection = null;

// Elementos DOM
const gradeButtonsContainer = document.getElementById('grade-buttons');
const tomoSelectorDiv = document.getElementById('tomo-selector');
const tomoButtonsContainer = document.getElementById('tomo-buttons');
const sectionSelectorDiv = document.getElementById('section-selector');
const sectionButtonsContainer = document.getElementById('section-buttons');
const coursesContainer = document.getElementById('courses-container');
const currentSelectorSpan = document.getElementById('current-selector');
const coursesCountSpan = document.getElementById('courses-count');

// Función para generar botones de grados
function generateGradeButtons() {
    gradeButtonsContainer.innerHTML = '';
    grades.forEach(grade => {
        const btn = document.createElement('button');
        btn.className = `selector-btn grade-btn ${currentGrade === grade.id ? 'active' : ''}`;
        btn.dataset.id = grade.id;
        btn.innerHTML = `<i class="${grade.icon}"></i><span>${grade.name}</span>`;
        btn.addEventListener('click', () => {
            currentGrade = grade.id;
            currentTomo = null;
            currentSection = null;
            generateGradeButtons();
            tomoSelectorDiv.style.display = 'block';
            sectionSelectorDiv.style.display = 'none';
            generateTomoButtons();
            updateCurrentSelector();
            renderCourses();
        });
        gradeButtonsContainer.appendChild(btn);
    });
}

// Función para generar botones de Tomos según el grado actual
function generateTomoButtons() {
    tomoButtonsContainer.innerHTML = '';
    if (!currentGrade) return;
    tomos.forEach(tomo => {
        const btn = document.createElement('button');
        btn.className = `selector-btn tomo-btn ${currentTomo === tomo.id ? 'active' : ''}`;
        btn.dataset.id = tomo.id;
        btn.innerHTML = `<i class="${tomo.icon}"></i><span>${tomo.name}</span>`;
        btn.addEventListener('click', () => {
            currentTomo = tomo.id;
            currentSection = sectionsByTomo[currentTomo][0].id;
            generateTomoButtons();
            generateSectionButtons();
            updateCurrentSelector();
            renderCourses();
            sectionSelectorDiv.style.display = 'block';
        });
        tomoButtonsContainer.appendChild(btn);
    });
}

// Función para generar botones de secciones según el tomo actual
function generateSectionButtons() {
    sectionButtonsContainer.innerHTML = '';
    if (!currentGrade || !currentTomo) return;
    const sections = sectionsByTomo[currentTomo];
    sections.forEach(section => {
        const btn = document.createElement('button');
        btn.className = `selector-btn section-btn ${currentSection === section.id ? 'active' : ''}`;
        btn.dataset.id = section.id;
        btn.innerHTML = `<i class="fas fa-chapter"></i><span>${section.name}</span>`;
        btn.addEventListener('click', () => {
            currentSection = section.id;
            generateSectionButtons();
            updateCurrentSelector();
            renderCourses();
        });
        sectionButtonsContainer.appendChild(btn);
    });
}

// Actualizar el texto del selector actual
function updateCurrentSelector() {
    if (!currentGrade) {
        currentSelectorSpan.innerHTML = `<i class="fas fa-graduation-cap"></i><span>Selecciona un grado para comenzar</span>`;
        return;
    }
    let text = `${grades.find(g => g.id === currentGrade).name}`;
    if (currentTomo) {
        text += ` - ${tomos.find(t => t.id === currentTomo).name}`;
        if (currentSection) {
            const sectionName = sectionsByTomo[currentTomo].find(s => s.id === currentSection).name;
            text += ` - ${sectionName}`;
        }
    }
    currentSelectorSpan.innerHTML = `<i class="fas fa-graduation-cap"></i><span>${text}</span>`;
}

// Renderizar tarjetas de cursos con borde por área
function renderCourses() {
    coursesContainer.innerHTML = '';
    if (!currentGrade || !currentTomo || !currentSection) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Selecciona un grado, tomo y sección para ver los materiales.</p>';
        coursesCountSpan.textContent = '0';
        return;
    }

    const links = driveLinks[currentGrade]?.[currentTomo]?.[currentSection];
    if (!links) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No hay enlaces disponibles para esta selección.</p>';
        coursesCountSpan.textContent = '0';
        return;
    }

    // Filtrar cursos que tienen enlace y están permitidos para el grado actual
    const availableCourses = courses.filter(course => {
        const hasLink = links[course.id] !== undefined;
        if (!hasLink) return false;
        if (course.availableGrades) {
            return course.availableGrades.includes(currentGrade);
        }
        return true;
    });

    coursesCountSpan.textContent = availableCourses.length;

    if (availableCourses.length === 0) {
        coursesContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No hay materiales disponibles para esta selección.</p>';
        return;
    }

    availableCourses.forEach(course => {
        const link = links[course.id];
        const areaColor = areaColors[course.area];
        const areaName = areaNames[course.area];
        const card = document.createElement('div');
        card.className = 'course-card';
        card.style.borderLeftColor = areaColor;
        card.innerHTML = `
            <div class="grade-tomo-section-tag">${currentGrade} / ${currentTomo} / ${currentSection}</div>
            <div class="area-badge" style="background-color: ${areaColor};">${areaName}</div>
            <div class="course-logo">
                <i class="${course.icon}" style="color: ${course.color}"></i>
            </div>
            <div class="course-content">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${link}" target="_blank" class="drive-link">
                    <i class="fab fa-google-drive"></i> Acceder al Material
                </a>
            </div>
        `;
        coursesContainer.appendChild(card);
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    generateGradeButtons();
    tomoSelectorDiv.style.display = 'none';
    sectionSelectorDiv.style.display = 'none';
    renderCourses();
});
