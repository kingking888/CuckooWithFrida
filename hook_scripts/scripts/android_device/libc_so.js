var libc_mapping = {
    "ro.build.id": "KTU84P",
    "ro.build.display.id": "KTU84P",
    "ro.build.version.incremental": "1227136",
    "ro.build.version.sdk": "19",
    "ro.build.version.codename": "REL",
    "ro.build.version.release": "6.0.1",
    "ro.build.date": "Fri Jun 13 07:05:49 UTC 2014",
    "ro.build.date.utc": "1402643149",
    "ro.build.type": "user",
    "ro.build.user": "android-build",
    "ro.build.host": "kpfj3.cbf.corp.google.com",
    "ro.build.tags": "release-keys",
    "ro.product.model": "Nexus 5",
    "ro.product.brand": "google",
    "ro.product.name": "hammerhead",
    "ro.product.device": "hammerhead",
    "ro.product.board": "hammerhead",
    "ro.product.cpu.abi": "armeabi-v7a",
    "ro.product.cpu.abi2": "armeabi",
    "ro.product.manufacturer": "LGE",
    "ro.product.locale.language": "en",
    "ro.product.locale.region": "US",
    "ro.wifi.channels": "",
    "ro.board.platform": "msm8974",
    "ro.build.product": "hammerhead",
    "ro.build.description": "hammerhead-user 4.4.4 KTU84P 1227136 release-keys",
    "ro.build.fingerprint": "google/hammerhead/hammerhead:4.4.4/KTU84P/1227136:user/release-keys",
    "ro.build.characteristics": "nosdcard",
    "ro.config.ringtone": "Titania.ogg",
    "ro.config.notification_sound": "Tethys.ogg",
    "ro.config.alarm_alert": "Oxygen.ogg",
    "ro.com.android.dateformat": "MM-dd-yyyy",
    "ro.com.android.dataroaming": "false",
    "ro.url.legal": "http://www.google.com/intl/%s/mobile/android/basic/phone-legal.html",
    "ro.url.legal.android_privacy": "http://www.google.com/intl/%s/mobile/android/basic/privacy.html",
    "ro.com.google.clientidbase": "android-google",
    "ro.carrier": "unknown",
    "ro.com.android.wifi-watchlist": "GoogleGuest",
    "ro.error.receiver.system.apps": "com.google.android.gms",
    "ro.setupwizard.enterprise_mode": "1",
    "ro.opengles.version": "196608",
    "ro.sf.lcd_density": "480",
    "persist.hwc.mdpcomp.enable": "true",
    "ro.hwui.texture_cache_size": "72",
    "ro.hwui.layer_cache_size": "48",
    "ro.hwui.r_buffer_cache_size": "8",
    "ro.hwui.path_cache_size": "32",
    "ro.hwui.gradient_cache_size": "1",
    "ro.hwui.drop_shadow_cache_size": "6",
    "ro.hwui.texture_cache_flushrate": "0.4",
    "ro.hwui.text_small_cache_width": "1024",
    "ro.hwui.text_small_cache_height": "1024",
    "ro.hwui.text_large_cache_width": "2048",
    "ro.hwui.text_large_cache_height": "1024",
    "drm.service.enabled": "true",
    "ro.qc.sensors.max_geomag_rotvec": "60",
    "ro.qc.sensors.max_gyro_rate": "200",
    "ro.qc.sensors.max_accel_rate": "200",
    "ro.qc.sensors.max_grav": "200",
    "ro.qc.sensors.max_rotvec": "200",
    "ro.qc.sensors.max_ortn": "200",
    "ro.qc.sensors.max_linacc": "200",
    "ro.qc.sensors.max_gamerv_rate": "200",
    "ro.qualcomm.sensors.smd": "true",
    "ro.qualcomm.sensors.game_rv": "true",
    "ro.qualcomm.sensors.georv": "true",
    "ro.qc.sensors.smgr_mag_cal_en": "true",
    "ro.qc.sensors.step_detector": "true",
    "ro.qc.sensors.step_counter": "true",
    "debug.qualcomm.sns.hal": "w",
    "debug.qualcomm.sns.daemon": "w",
    "debug.qualcomm.sns.libsensor1": "w",
    "ro.telephony.call_ring.multiple": "0",
    "wifi.interface": "wlan0",
    "wifi.supplicant_scan_interval": "15",
    "media.aac_51_output_enabled": "true",
    "persist.radio.apm_sim_not_pwdn": "1",
    "ro.telephony.default_network": "10",
    "telephony.lteOnCdmaDevice": "1",
    "persist.radio.mode_pref_nv10": "1",
    "persist.audio.handset.mic.type": "digital",
    "persist.audio.dualmic.config": "endfire",
    "persist.audio.fluence.voicecall": "true",
    "persist.audio.fluence.voicerec": "false",
    "persist.audio.fluence.speaker": "false",
    "af.resampler.quality": "4",
    "persist.radio.custom_ecc": "1",
    "persist.radio.always_send_plmn": "true",
    "ro.input.noresample": "1",
    "dalvik.vm.heapstartsize": "8m",
    "dalvik.vm.heapgrowthlimit": "192m",
    "dalvik.vm.heapsize": "512m",
    "dalvik.vm.heaptargetutilization": "0.75",
    "dalvik.vm.heapminfree": "512k",
    "dalvik.vm.heapmaxfree": "8m",
    "keyguard.no_require_sim": "true",
    "ro.facelock.black_timeout": "400",
    "ro.facelock.det_timeout": "1500",
    "ro.facelock.rec_timeout": "2500",
    "ro.facelock.lively_timeout": "2500",
    "ro.facelock.est_max_time": "600",
    "ro.facelock.use_intro_anim": "false",
    "persist.sys.dalvik.vm.lib": "libdvm.so",
    "net.bt.name": "Android",
    "dalvik.vm.stack-trace-file": "/data/anr/traces.txt"
};

Interceptor.attach(Module.findExportByName("libc.so", "__system_property_get"), {
    onEnter: function(args) {
        var prop = Memory.readCString(args[0]);
        var v = Memory.readCString(args[1]);
        if (prop in libc_mapping) {
            send("__system_property_get : " + prop + ":" + v);
            Memory.writeUtf8String(args[1], libc_mapping[prop]);
        }
    },
    onLeave: function(retval) {

    }
});

Interceptor.attach(Module.findExportByName("libc.so", "system"), {
    onEnter: function(args) {
        var cmd = Memory.readCString(args[0]);
        send("SYSTEM CMD: " + cmd);
        if (cmd.indexOf("getprop") != -1 || cmd == "mount" || cmd.indexOf("build.prop") != -1 || cmd == "id") {
            send("Bypass native system: " + cmd);
            Memory.writeUtf8String(args[0], "grep");
        }
        if (cmd == "su") {
            send("Bypass native system: " + cmd);
            Memory.writeUtf8String(args[0], "justafakecommandthatcannotexistsusingthisshouldthowanexceptionwheneversuiscalled");
        }
    },
    onLeave: function(retval) {

    }
});

Interceptor.attach(Module.findExportByName("libc.so", "fopen"), {
    onEnter: function(args) {
        var path = Memory.readCString(args[0]);
        path = path.split("/");
        var executable = path[path.length - 1];
        var shouldFakeReturn = (RootBinaries.indexOf(executable) > -1)
        if (shouldFakeReturn) {
            Memory.writeUtf8String(args[0], "/notexists");
            send("Bypass native fopen");
        }
    },
    onLeave: function(retval) {

    }
});