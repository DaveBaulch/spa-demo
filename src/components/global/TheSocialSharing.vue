<template>
  <div class="social-links-wrapper">
    <h2 class="social-links-title">Follow Us</h2>
    <ul class="social-links">
      <li class="social-links__item" v-if="socialLinks.twitterLink">
        <TheSocialSharingItem :href="socialLinks.twitterLink">
          <img src="@/assets/images/svg/icon-footer-twitter.svg" width="20" height="16" alt="Twitter" />
          <span class="sr-only">Twitter</span>
        </TheSocialSharingItem>
      </li>
      <li class="social-links__item" v-if="socialLinks.linkedinLink">
        <TheSocialSharingItem :href="socialLinks.linkedinLink">
          <img src="@/assets/images/svg/icon-footer-linkedin.svg" width="21" height="21" alt="LinkedIn" />
          <span class="sr-only">LinkedIn</span>
        </TheSocialSharingItem>
      </li>
      <li class="social-links__item" v-if="socialLinks.facebookLink">
        <TheSocialSharingItem :href="socialLinks.facebookLink">
          <img src="@/assets/images/svg/icon-footer-facebook.svg" width="21" height="21" alt="Facebook" />
          <span class="sr-only">Facebook</span>
        </TheSocialSharingItem>
      </li>
      <li class="social-links__item" v-if="socialLinks.youtubeLink">
        <TheSocialSharingItem :href="socialLinks.youtubeLink">
          <img src="@/assets/images/svg/icon-footer-youtube.svg" width="22" height="16" alt="YouTube" />
          <span class="sr-only">YouTube</span>
        </TheSocialSharingItem>
      </li>
    </ul>
  </div>  
</template>

<script>
import TheSocialSharingItem from "@/components/global/TheSocialSharingItem";

export default {
  name: "TheSocialSharing",
  components: {
    TheSocialSharingItem
  },
  props: {
    socialLinks: {
      type: Object,
      required: false
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';

.social-links {
  margin: 0 auto;
  list-style: none;
  display: flex;
}

.social-links__item {
  margin: 0 1rem 0 0;
}

</style>