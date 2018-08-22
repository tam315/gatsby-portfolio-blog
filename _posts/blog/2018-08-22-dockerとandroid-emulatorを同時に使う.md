---
layout: blog
title: DockerとAndroid Emulatorを同時に使う
summary: ついにAndroid Emulatorが、Hyper-Vをサポート対象としたようです。
date: 2018-08-22T01:17:37.367Z
dateModified: 2018-08-22T01:17:37.368Z
thumbnail: /blogImages/20180822.png
---

これまで Windows 環境では、Docker（Hyper-V）と Android Emulator(HAXM)を同時に使用できませんでした。
Docker と React Native の開発を同時に行う際などは、その都度 Hyper-V の有効・無効を切り替える必要があり、とても不便でした。

ところが先月、ついに Android Emulator が、Hyper-V を[サポート対象とした](https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html)ようです。早速試してみましたが、特に問題なく快適に動いています。

## 動作の条件

- 仮想化支援が UEFI 等の設定で有効化されていること
  - Intel CPU の場合： VT-x
  - AMD CPU の場合: Virtualization もしくは SVM
- Android Studio のバージョンが 3.2 Beta 1 以上であること

  下記からダウンロードしました。msi バージョンはないみたいです。
  地道に zip を解凍して適当なフォルダに置きました。

  [https://developer.android.com/studio/preview](https://developer.android.com/studio/preview)

* Android Emulator のバージョンが 27.3.8 以上であること

  Android Studio => Tools => SDK Manager => SDK Tools で確認

* Windows 10 のバージョンが 1803 以上であること
* Windows の機能で、「Windows ハイパーバイザープラットフォーム」が有効化されていること。

![Windowsの機能](/blogImages/20180822.png)

## 参考

[公式ドキュメント](https://developer.android.com/studio/run/emulator-acceleration#vm-windows)
