# Private Fairway: Simulator Troubleshooting Guide (SOP)

This document contains the official procedures for resolving common issues with the TrackMan simulator systems.

---

## 1. Display & Projector Issues

### Game Frozen or Showing on Wrong Monitor
**Symptoms:**
- Game appears on the wall monitor instead of the projector.
- Game window is stuck or unresponsive.
- Mouse cursor appears on the wrong screen.

**Root Cause:** TrackMan software display settings are assigned to the incorrect screen.

**Solution Steps:**
1. **Exit the Round**: Close the game window on the wall monitor or press the **Windows Key**.
2. **TrackMan Home**: Return to the main TrackMan home screen.
3. **Advanced Settings**: Click your **Player Name** (bottom-right) > **Advanced Settings**.
4. **Extended Displays**: Select the **Extended Displays** tab.
5. **Screen 1 Configuration**: Ensure **Projector** and **TPS** are checked under **Screen 1**.
6. **Screen 2 Configuration**: Ensure they are **NOT** checked under **Screen 2**.
7. **Save**: Click **Save Settings**.

> **Warning:** Do NOT change Windows system display settings. Only use the TrackMan software settings.

---

## 2. TrackMan Connection & Tracking

### Simulator Won't Connect / Missing Shot Data
**Symptoms:**
- TrackMan logo is not green.
- Shots are not registering after being hit.
- "Unit not found" error message.

**Root Cause:** TrackMan unit or software service needs a refresh.

**Solution Steps (Soft Reboot):**
1. **Exit Software**: Close the TPS software completely.
2. **Admin Tool**: Open the **TrackMan folder** on the desktop and double-click **TrackMan Admin**.
3. **Login**: Click **Login** (no password usually required for local admin).
4. **Reboot**: Go to **Administration** > **Reboot**.
5. **Confirm**: Wait for the unit to cycle.
6. **Relaunch**: Open TPS and click the **TrackMan Logo** > **AutoTarget**.

---


### Hard Restart of TrackMan Unit
**Symptoms:**
- Software reboot did not fix the connection.
- Unit is completely unresponsive.
- Green light is blinking or completely off.

**Solution Steps:**
1. **Physical Access**: Gently lift the unit (be careful not to pull the cables).
2. **Power Off**: Push the **rear triangular leg** down until it clicks, then fold it up to power off.
3. **Wait**: Wait for the green light to turn off completely.
4. **Power On**: Extend the rear leg again until it clicks.
5. **Wait for Solid Green**: Wait for the status light to become solid green before placing it back.

---

## 3. Software Performance

### App is Freezing, Crashing, or Lagging
**Symptoms:**
- Significant delay between shot and data display.
- Software closes unexpectedly.
- Stuttering video during swing analysis.

**Maintenance Steps:**
- **Update Check**: Go to **Advanced Settings** > **About** and ensure you are on the latest version.
- **Clear Cache**: If performance is poor, navigate to `C:\ProgramData\TrackMan\Trackman Performance Studio\` and clear the **Cache** and **Temp** folders.
- **GPU Check**: Ensure all monitors are plugged directly into the **Nvidia GPU** ports, not the motherboard.

---

## 4. Frequently Asked Questions (FAQ)

**Q: Why are all the golf courses locked?**
- **A:** This usually means the TPS software has lost its connection to the TrackMan unit. Click the **TrackMan Logo** at the bottom center to re-establish the connection and run **AutoTarget**.

**Q: Why can't I start a game of Virtual Golf?**
- **A:** Every player must have a handicap assigned. Click **Edit Player** > **Handicap** and assign a temporary handicap for any guests.

**Q: The cameras aren't working / I can't see my swing video.**
- **A:** The most effective fix is a full PC reboot. Restart Windows via the **Start Menu** or the physical power button on the PC tower.
