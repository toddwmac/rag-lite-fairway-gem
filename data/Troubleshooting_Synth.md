# Private Fairway: Extended Troubleshooting Manual (Synthetic Data)

This manual provides expanded troubleshooting procedures for accounts, tournaments, and environment-specific simulator issues.

---

## 1. Account & Tournament Management

### Private Fairway Members Tournament Not Visible
**Symptoms:**
- Tournament is missing from the available list in TrackMan.
- Cannot join the event or the invite is missing.

**Root Cause:** Incorrect Windows login session (!PFTour), unlinked TrackMan account, or unaccepted digital invite.

**Solution Steps:**
1. **Windows Login**: Ensure you are logged into the PC as the **!PFTour** user.
2. **Account Link**: Scan the QR code on the TrackMan home screen using your phone to sign in.
3. **App Verification**: Open the **TrackMan Golf app** on your mobile device.
4. **Accept Invite**: Go to **Tournaments** > **My Tournaments** and check the **Invite** tab. Accept the Private Fairway invite.
5. **Registration**: If still missing, verify your registration at `https://www.privatefairway.com/pftour`.

---

## 2. System Status & Setup

### Courses Locked or Subscription Error
**Symptoms:**
- All course icons show a "lock" symbol.
- A "Subscription Error" message appears when trying to play.

**Root Cause:** The TrackMan unit has temporarily lost its license heartbeat or connection.

**Solution Steps:**
1. **Refresh Unit**: Click the **TrackMan Logo** on the home screen.
2. **Auto-Search**: Wait for the software to re-discover the unit.
3. **Calibrate**: Once connected, the calibration screen will appear. Click **AutoTarget**.
4. **Re-Check**: Return to course selection; the locks should now be removed.

---

### Player Setup: Game Won't Start (Handicap Required)
**Symptoms:**
- The **Start Game** button is greyed out.
- A player’s name shows a `-` instead of a numerical handicap.

**Root Cause:** TrackMan software requires all active players to have a defined handicap before a round can begin.

**Solution Steps:**
1. **Identify Player**: Find the name with the `-` indicator.
2. **Edit Profile**: Click **Edit Player**.
3. **Assign Value**: Select **Handicap** and assign a number (use a temporary estimate if unknown).
4. **Finalize**: Click **Done**. The **Start Game** button should now be active.

---

## 3. Environment & Hardware

### Swing Cameras Won't Activate
**Symptoms:**
- No swing video is appearing during or after shots.
- Camera feed status shows as "Offline."

**Root Cause:** Camera drivers or USB services have hung and require a PC-level reset.

**Solution Steps:**
1. **Windows Restart**: Click **Windows Icon** > **Power** > **Restart**.
2. **Hard Reset**: If the PC is unresponsive, hold the physical **Power Button** on the computer tower until it shuts down, then restart.
3. **Initialize**: Log back in and allow TrackMan to initialize the camera feeds automatically.

---

### Projector Screen is Blank
**Symptoms:**
- Large projector screen is black/no image.
- Small wall monitor works fine, but the big screen has no power.

**Root Cause:** Projector is in standby mode or the power-off timer has triggered.

**Solution Steps:**
1. **Remote Access**: Locate the white **Panasonic Remote**.
2. **Power Cycle**: Point it at the projector and press the **Red Power Button**.
3. **Warm Up**: Wait 30 seconds for the lamp to reach full brightness.

---

## 4. Advanced Hardware Troubleshooting

### TrackMan Logo Stays Orange After Reboot
**Symptoms:**
- Logo is orange instead of green.
- Unit is detected but "Not Ready."

**Root Cause:** The unit is not level or is not facing the hitting area correctly.

**Solution Steps:**
1. **Positioning**: Check that the unit is placed exactly on its floor markers.
2. **Facing**: Ensure the front face of the unit is pointing directly at the hitting mat.
3. **Leveling**: Verify the unit is flat and all legs are stable.
4. **Restart**: Relaunch TrackMan software.

---

### Radar Detection Errors (Blocked / Misaligned)
**Symptoms:**
- Error message: "Radar Blocked" or "Ball/Club Not Detected."
- Consistent missed shots.

**Solution Steps:**
1. **Clear Path**: Ensure no bags, clubs, or people are standing between the TrackMan unit and the hitting mat.
2. **Zone Check**: Ensure the player is standing within the marked hitting zone.
3. **Mat Alignment**: Verify the hitting mat hasn't shifted or rotated.
4. **Retry Calibration**: Run **AutoTarget** to reset the radar's focus.
