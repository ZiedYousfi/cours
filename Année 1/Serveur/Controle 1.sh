#!/bin/bash 

#1.1
mkdir -p /home/client_acme/{documents,logs,backups}

ls -R /home/client_acme

#1.2
useradd -m -s /bin/bash technicien_01

grep "technicien_01" /etc/passwd

#1.3
# Notation octale des permissions :
# 7 pour ecriture, lecture et exécution pour le propriétaire
# 5 pour lecture et exécution pour le groupe
# 0 pour aucun droit pour les autres
chmod -R 750 /home/client_acme

chown -R technicien_01:technicien_01 /home/client_acme

ls -ld /home/client_acme
ls -l /home/client_acme

#2.1
ip a

hostnamectl set-hostname srv-client-acme

cat /etc/hostname

cat > /etc/network/interfaces <<EOF
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
    address 192.168.1.50
    netmask 255.255.255.0
    gateway 192.168.1.1
    dns-nameservers 8.8.8.8
EOF

cat /etc/network/interfaces

cat > /etc/hosts <<EOF
127.0.0.1 localhost
127.0.1.1 srv-client-acme

::1 localhost ip6-localhost ip6-loopback
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
EOF

cat /etc/hosts

systemctl restart networking

ip a show "eth0"
ip route

# 2.2
ping -c 5 8.8.8.8

ping -c 5 google.fr

cat /etc/hostname
cat /etc/hosts
cat /etc/resolv.conf

#2.3
sudo apt update

apt list --upgradable

apt install -y curl

curl -I https://www.google.fr

# 3.1
lsblk
fdisk -l

#3.2
# Partitionnement via fdisk :
# partition 1 : 500M
# partition 2 : le reste
fdisk "sdb" <<EOF
n
p
1

+500M
n
p
2


w
EOF

lsblk "sdb"
fdisk -l "sdb"

mkfs.ext4 "sdb1"
mkfs.ext4 "sdb2"

blkid "sdb1"
blkid "sdb2"

#3.3
mkdir -p /mnt/logs_client
mkdir -p /mnt/donnees_client

mount "sdb1" /mnt/logs_client
mount "sdb2" /mnt/donnees_client

df -h
mount | grep -E "logs_client|donnees_client"

touch /mnt/logs_client/test_logs.txt
touch /mnt/donnees_client/test_donnees.txt

ls -l /mnt/logs_client
ls -l /mnt/donnees_client

UUID1=$(blkid -s UUID -o value "sdb1")
UUID2=$(blkid -s UUID -o value "sdb2")

echo "UUID=${UUID1} /mnt/logs_client ext4 defaults 0 2" >> /etc/fstab
echo "UUID=${UUID2} /mnt/donnees_client ext4 defaults 0 2" >> /etc/fstab

cat /etc/fstab

umount /mnt/logs_client
umount /mnt/donnees_client
mount -a

df -h
mount | grep -E "logs_client|donnees_client"

# 4.1
find /etc -type f -name "*.conf"

tail -n 10 /var/log/syslog

cut -d: -f1 /etc/passwd

#4.2
cut -d: -f1 /etc/passwd > /tmp/users_backup.txt

cat /tmp/users_backup.txt

{
    lsblk
    df -h
} > /tmp/rapport_disques.txt

cat /tmp/rapport_disques.txt

ls /dossier_inexistant 2> /tmp/erreurs.log

cat /tmp/erreurs.log

# 4.3
awk -F: '$3 < 1000 {print $1, $3}' /etc/passwd

grep -v '^#' /etc/hosts

find /home -mindepth 1 -maxdepth 1 | wc -l

