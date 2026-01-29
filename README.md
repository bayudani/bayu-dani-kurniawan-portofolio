```mermaid
usecaseDiagram

actor Admin
actor Guru
actor "Orang Tua" as Ortu

Admin --> (Register)
Admin --> (Login)
Admin --> (Kelola Data Siswa)
Admin --> (Kelola Data Guru)
Admin --> (Kelola Data Orang Tua)
Admin --> (Kelola Kelas)
Admin --> (Kelola Mata Pelajaran)
Admin --> (Lihat Laporan Absensi)
Admin --> (Logout)

Guru --> (Login)
Guru --> (Input Absensi)
Guru --> (Lihat Daftar Siswa)
Guru --> (Lihat Rekap Absensi)
Guru --> (Kelola PR)
Guru --> (Logout)

Ortu --> (Login)
Ortu --> (Lihat Absensi Harian Anak)
Ortu --> (Lihat Riwayat Absensi)
Ortu --> (Download PR)
Ortu --> (Logout)


(Login) ..> (Register) : <<extend>>
(Kelola PR) ..> (Download PR) : <<include>>
```